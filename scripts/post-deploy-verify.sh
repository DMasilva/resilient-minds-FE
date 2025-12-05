#!/bin/bash

# Post-Deployment Verification Script
# Run this after deploying to verify the deployment was successful

set -e

# Configuration
PRODUCTION_URL="${1:-https://resilientminds.vercel.app}"

echo "🔍 Post-Deployment Verification"
echo "================================"
echo "URL: $PRODUCTION_URL"
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

ERRORS=0

# Function to check URL
check_url() {
    local url=$1
    local name=$2
    
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$HTTP_CODE" -eq 200 ]; then
        echo -e "${GREEN}✅${NC} $name: OK (200)"
    else
        echo -e "${RED}❌${NC} $name: FAILED ($HTTP_CODE)"
        ((ERRORS++))
    fi
}

# Wait for deployment to be ready
echo "⏳ Waiting 10 seconds for deployment to stabilize..."
sleep 10
echo ""

# Check main pages
echo "1️⃣  Checking page routes..."
check_url "$PRODUCTION_URL" "Home"
check_url "$PRODUCTION_URL/about" "About"
check_url "$PRODUCTION_URL/services" "Services"
check_url "$PRODUCTION_URL/contact" "Contact"
check_url "$PRODUCTION_URL/careers" "Careers"
check_url "$PRODUCTION_URL/resources" "Resources"
check_url "$PRODUCTION_URL/admin" "Admin Portal"

echo ""
echo "2️⃣  Checking static files..."
check_url "$PRODUCTION_URL/manifest.json" "Manifest"
check_url "$PRODUCTION_URL/robots.txt" "Robots.txt"
check_url "$PRODUCTION_URL/favicon.ico" "Favicon"

echo ""
echo "3️⃣  Verifying manifest.json content..."
MANIFEST_CONTENT=$(curl -s "$PRODUCTION_URL/manifest.json")
if echo "$MANIFEST_CONTENT" | grep -q "Resilient Minds"; then
    echo -e "${GREEN}✅${NC} Manifest has correct branding"
else
    echo -e "${RED}❌${NC} Manifest branding incorrect"
    ((ERRORS++))
fi

echo ""
echo "4️⃣  Verifying robots.txt content..."
ROBOTS_CONTENT=$(curl -s "$PRODUCTION_URL/robots.txt")
if echo "$ROBOTS_CONTENT" | grep -q "Disallow: /admin"; then
    echo -e "${GREEN}✅${NC} Admin route blocked in robots.txt"
else
    echo -e "${RED}❌${NC} Admin route not blocked"
    ((ERRORS++))
fi

echo ""
echo "5️⃣  Checking response times..."
for page in "" "about" "services" "contact"; do
    TIME=$(curl -s -o /dev/null -w "%{time_total}" "$PRODUCTION_URL/$page")
    PAGE_NAME=$([ -z "$page" ] && echo "Home" || echo "$page")
    
    # Convert to milliseconds
    TIME_MS=$(echo "$TIME * 1000" | bc)
    
    if (( $(echo "$TIME < 3" | bc -l) )); then
        echo -e "${GREEN}✅${NC} $PAGE_NAME: ${TIME}s"
    else
        echo -e "${YELLOW}⚠️${NC}  $PAGE_NAME: ${TIME}s (slow)"
    fi
done

echo ""
echo "================================"
echo "📊 SUMMARY"
echo "================================"

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ All checks passed!${NC}"
    echo -e "${GREEN}🎉 Deployment verified successfully${NC}"
    exit 0
else
    echo -e "${RED}❌ $ERRORS issue(s) found${NC}"
    echo -e "${RED}⚠️  Deployment may have issues${NC}"
    exit 1
fi

