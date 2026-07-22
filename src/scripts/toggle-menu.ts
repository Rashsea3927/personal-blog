const toggleMenuButton = document.getElementById("toggle-menu") as HTMLElement;
const menuOpenIcon = toggleMenuButton.querySelector("#icon-menu") as HTMLElement;
const closeIcon = toggleMenuButton.querySelector("#icon-close") as HTMLElement;
const menuElement = document.getElementById("menu") as HTMLElement;

const handleShowMenu = (menu: HTMLElement) => {
  menu.hidden = false;

  const animation = menu.animate(
    [
      {
        opacity: 0,
        transform: "translateY(-20px)",
      },
      {
        opacity: 1,
        transform: "translateY(0)",
      },
    ],
    {
      duration: 300,
      easing: "ease-out",
      fill: "forwards",
    },
  );

  animation.finished.then(() => {
    animation.cancel(); // fill: forwards を解除
  });
};

const handleHideMenu = (menu: HTMLElement) => {
  menu.style.overflow = "hidden";

  const animation = menu.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0,
        transform: "translateY(-20px)",
      },
    ],
    {
      duration: 300,
      easing: "ease-in",
      fill: "forwards",
    },
  );

  animation.finished.then(() => {
    animation.cancel();

    menu.hidden = true;
  });
};

export const handleToggleMenu = () => {
  if (toggleMenuButton.dataset.open == "false") {
    toggleMenuButton.dataset.open = "true";
    toggleMenuButton.classList.add("bg-neutral-900", "dark:bg-neutral-0");
    handleShowMenu(menuElement);
  } else {
    toggleMenuButton.dataset.open = "false";
    toggleMenuButton.classList.remove("bg-neutral-900", "dark:bg-neutral-0");
    handleHideMenu(menuElement);
  }
  menuOpenIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
};
