const codeBlocks = document.querySelectorAll('.code-header + .highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
  const code = codeBlocks[index].innerText;

  console.log("Copasdasday")

  copyCodeButton.addEventListener('click', () => {
    window.navigator.writeText(code);
    copyCodeButton.classList.add('copied');

    console.log("Copy")
    setTimeout(() => {
      copyCodeButton.classList.remove('copied');
    }, 2000);
  });
});
