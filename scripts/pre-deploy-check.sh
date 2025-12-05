#!/bin/bash

# Pre-Deployment Verification Script
# Run this before deploying to production

set -e

echo "🔍 Resilient Minds - Pre-Deployment Checks"
echo "=========================================="
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ PASS${NC}: $2"
    else
        echo -e "${RED}❌ FAIL${NC}: $2"
        ((ERRORS++))
    fi
}

print_warning() {
    echo -e "${YELLOW}⚠️  WARN${NC}: $1"
    ((WARNINGS++))
}

# 1. Check if node_modules exists
echo "1️⃣  Checking dependencies..."
if [ -d "node_modules" ]; then
    print_status 0 "node_modules directory exists"
else
    print_status 1 "node_modules not found. Run 'npm install'"
fi

# 2. Check for console.log statements
echo ""
echo "2️⃣  Checking for console.log statements..."
CONSOLE_LOGS=$(grep -r "console\.log" src/ --include="*.js" --include="*.jsx" --exclude="index.js" || true)
if [ -z "$CONSOLE_LOGS" ]; then
    print_status 0 "No console.log statements found"
else
    print_warning "console.log statements found in:"
    echo "$CONSOLE_LOGS"
fi

# 3. Check robots.txt
echo ""
echo "3️⃣  Checking robots.txt..."
if [ -f "public/robots.txt" ]; then
    if grep -q "Disallow: /admin" public/robots.txt; then
        print_status 0 "robots.txt blocks /admin route"
    else
        print_status 1 "robots.txt does not block /admin route"
    fi
else
    print_status 1 "robots.txt not found"
fi

# 4. Check manifest.json
echo ""
echo "4️⃣  Checking manifest.json..."
if [ -f "public/manifest.json" ]; then
    if grep -q "Resilient Minds" public/manifest.json; then
        print_status 0 "manifest.json has correct branding"
    else
        print_status 1 "manifest.json still has default Create React App branding"
    fi
else
    print_status 1 "manifest.json not found"
fi

# 5. Check for .env files in git
echo ""
echo "5️⃣  Checking for .env files..."
if git ls-files | grep -q "\.env"; then
    print_status 1 ".env files found in git (should be in .gitignore)"
else
    print_status 0 "No .env files in git"
fi

# 6. Run npm audit
echo ""
echo "6️⃣  Running security audit..."
if npm audit --audit-level=high > /dev/null 2>&1; then
    print_status 0 "No high-severity vulnerabilities"
else
    print_warning "High-severity vulnerabilities found. Run 'npm audit' for details"
fi

# 7. Test build
echo ""
echo "7️⃣  Testing production build..."
if npm run build > /dev/null 2>&1; then
    print_status 0 "Production build successful"
    
    # Check build size
    BUILD_SIZE=$(du -sh build 2>/dev/null | cut -f1 || echo "unknown")
    echo "   📦 Build size: $BUILD_SIZE"
    
    # Verify critical files exist
    if [ -f "build/index.html" ] && [ -f "build/manifest.json" ] && [ -f "build/robots.txt" ]; then
        print_status 0 "All critical files present in build"
    else
        print_status 1 "Missing critical files in build"
    fi
else
    print_status 1 "Production build failed"
fi

# 8. Check package.json
echo ""
echo "8️⃣  Checking package.json..."
if [ -f "package.json" ]; then
    VERSION=$(grep -o '"version": *"[^"]*"' package.json | cut -d'"' -f4)
    echo "   📌 Current version: $VERSION"
    print_status 0 "package.json found"
else
    print_status 1 "package.json not found"
fi

# 9. Check vercel.json
echo ""
echo "9️⃣  Checking vercel.json..."
if [ -f "vercel.json" ]; then
    print_status 0 "vercel.json exists"
else
    print_warning "vercel.json not found (optional)"
fi

# Summary
echo ""
echo "=========================================="
echo "📊 SUMMARY"
echo "=========================================="
echo -e "Errors: ${RED}$ERRORS${NC}"
echo -e "Warnings: ${YELLOW}$WARNINGS${NC}"
echo ""

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ All critical checks passed!${NC}"
    echo -e "${GREEN}🚀 Ready for deployment${NC}"
    exit 0
else
    echo -e "${RED}❌ $ERRORS critical issue(s) found${NC}"
    echo -e "${RED}⛔ NOT ready for deployment${NC}"
    exit 1
fi

