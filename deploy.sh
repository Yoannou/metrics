# FIRST: npm run build
# THEN: ./deploy.sh
# Empties calorie-build folder with rm www/metrics/*
# Copies the contents of the build folder (build/.) to the www/calorie-build folder on the apache server

rm -rf /home/james/www/metrics/*
cp -r ./build/. /home/james/www/metrics/
