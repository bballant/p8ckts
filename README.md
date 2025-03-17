# p8ckts

`p8ckts` is a simple preprocessor for [PICO-8](https://www.lexaloffle.com/pico-8.php) programs that:

- Inlines `#include` files into the corresponding `.p8` file.
    - It's nice to have one file to share
    - Fake8 on my little retro gaming device wants one file
- Performs basic cleanup, such as removing comments, to reduce file size.
    - More file _cleaning_ to come

## Usage

### Prerequisites
- Requires [Node.js](https://nodejs.org/) installed.

### Running the Tool
You can run `p8ckts` directly using `npx`:

```sh
npx github:bballant/p8ckts -p path/to/my-program.p8
```

Output will be `path/to/my-program-full.p8` by default. Use `-o <out.p8>` to override.

This also works:
```sh
npx github:bballant/p8ckts --help
```

# License

MIT
