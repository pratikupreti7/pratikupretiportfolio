declare module 'typewriter-effect' {
  class Typewriter {
    constructor(selector: string, options: TypewriterOptions);
  }

  interface TypewriterOptions {
    strings: string[];
    autoStart?: boolean;
    loop?: boolean;
    delay?: number;
    deleteSpeed?: number;
    // Add more options here as needed
  }

  export default Typewriter;
}
