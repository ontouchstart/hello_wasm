build:
	cargo install wasm-pack 
	wasm-pack build --target web
	wasm-pack test --headless --chrome

deploy:
	rm pkg/.gitignore -rf src Cargo.* Makefile 
