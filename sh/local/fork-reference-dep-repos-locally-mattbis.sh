## create local var ( move where you want )
(./mkdir-local-var.sh)
cd ../../var/local
mkdir -pv ref-repos
cd ref-repos
## clone some references from the mirror backups
git clone https://github.com/mattbis/ref-regl-insta-lines
git clone https://github.com/mattbis/ref-regl-gpu-lines
git clone https://github.com/mattbis/ref-regl-line
git clone https://github.com/mattbis/ref-webgl-lines