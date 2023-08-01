import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "JE M'APPELLE AXEL",
          "DEVELOPPEUR WEB",
          "ADMINISTRATEUR BASE DE DONNEES"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
