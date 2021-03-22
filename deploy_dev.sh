#rsync -azP --exclude 'node_modules' --exclude '.git' --exclude '.idea' ./ root@167.71.216.224:/root/media-server/
rsync -azP --exclude '.env' --exclude 'package-lock.json' --exclude 'logs/' --exclude 'node_modules' --exclude '.git' --exclude 'var/' --exclude '.idea' ./ root@139.162.54.236:/root/cryptocombat/cigar
#rsync -azP ./.env.dev root@139.162.54.236:/root/cryptocombat/cigar
# docker stop incognito-cryptocombat-cigar && docker rm incognito-cryptocombat-cigar
# docker build -t incognito/cigar .
# docker run -d --name incognito-cryptocombat-cigar -p 9000:80 incognito/cigar:latest
