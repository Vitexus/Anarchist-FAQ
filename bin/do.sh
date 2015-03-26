
cd ..
rm *.html
rm *.gif

mkdir tmp
cd tmp
apt-get source anarchism
cd anarchism-*
cp html/*.* ../..
cd ../..
rm -rf tmp

headTags='<meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1">'

headerInc='<link href="css/bootstrap.min.css" rel="stylesheet"><link href="css/afaq.css" rel="stylesheet">';
footerInc='<script src="js/jquery.min.js"></script><script src="js/bootstrap.min.js"></script><script type="text/javascript" src="js/app.js"></script>';

for html in *.html; do
    sed -i "s/<HEAD>/<head>\n/" $html
    sed -i "s/<head>/<head>$headTags\n/" $html
    sed -i "s/<a href=\"http/<a target=\"_blank\" href=\"http/" $html
    sed -i "s#</head>#$headerInc\n</head>#" $html
    sed -i "s#</body>#$footerInc\n</body>#" $html
done


bower install bootstrap

cp bower_components/jquery/dist/*.js js
cp -r bower_components/bootstrap/dist/* .

rm -rf bower_components

rm -f ../afaq.zip
zip -9 -r --exclude=\*.git\*  --exclude=\screenshot\*.\*  --exclude=\*nbproject\* --exclude=README.md --exclude=LICENSE --exclude=\*bin\* ../afaq.zip . -x bin nbproject readme.md LICENSE .git

#CleanUP
exit

rm *.html
rm *.gif
rm css/bootstrap*
rm js/bootstrap*
rm js/jquery*
rm js/npm*
rm -rf fonts

