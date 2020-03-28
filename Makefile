
install:
	npm install

start:
	node bin/brain-games.js

publish:
	npm publish --dry-run

link:
	npm unlink
	npm link

lint:
	npx eslint .