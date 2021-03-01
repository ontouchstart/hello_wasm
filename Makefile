build:
	cargo install wasm-pack 
	wasm-pack build --target web

deploy:
	rm pkg/.gitignore -rf src Cargo.* Makefile 
