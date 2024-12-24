"use script";

/* Element selectors */

const btnThemeToggle = document.querySelector(".btn--theme-toggle");
const todosContainer = document.querySelector(".todos-container");

/* Theme toggle */

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btnThemeToggle.addEventListener("click", function () {
  let theme;
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    theme = document.body.classList.contains("light-theme") ? "light" : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
});

/* Todos List */

const todosList = [];

/* Helper Functions */

function getCompletedTodosCount() {
  let count = 0;
  todosList.forEach((todoItem) => {
    if (todoItem.completed) count += 1;
  });
  return count;
}

function renderTodosList() {
  todosContainer.innerHTML = "";
  let markup;

  if (todosList.length === 0) {
    markup = `
      <svg
        class="empty-todos__img"
        width="154"
        height="168"
        viewBox="0 0 154 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_5_452)">
          <path
            d="M39.5796 107.291C25.5672 107.291 8.54824 105.114 4.91539 95.0149C2.58893 88.5426 1.27061 79.8422 1.38991 71.7473C1.52711 62.6443 3.4181 55.0505 6.71988 50.3618C9.39829 46.559 12.9238 44.6292 17.1949 44.6262C17.7467 44.5964 23.3511 44.4204 28.174 49.5028C34.2049 55.8558 36.248 67.2972 34.2496 83.5108C34.19 84 33.7426 84.349 33.2534 84.2893C32.7643 84.2297 32.4153 83.7823 32.4749 83.2931C34.3749 67.8908 32.4511 56.6462 26.9123 50.7734C25.081 48.8317 22.9096 47.5074 20.4579 46.8393C18.6176 46.3382 17.2993 46.4158 17.2844 46.4158H17.2217C17.2217 46.4158 17.2098 46.4158 17.2039 46.4158C13.5442 46.4158 10.5078 48.0891 8.18436 51.3908C2.84544 58.9727 0.879879 78.503 6.60058 94.4094C9.57128 102.668 23.4883 104.932 34.6403 105.38C46.9557 105.872 58.6983 104.288 58.8146 104.273C59.3008 104.204 59.7571 104.547 59.8228 105.04C59.8913 105.529 59.5483 105.979 59.0592 106.048C58.2419 106.161 49.6907 107.294 39.5796 107.294V107.291Z"
            fill="white" />
          <path
            d="M8.51543 59.0652C8.44385 59.0652 8.36928 59.0562 8.2977 59.0383C2.69034 57.6365 0.146153 49.8041 0.0417602 49.47C-0.107372 48.9988 0.152118 48.4947 0.623374 48.3456C1.09165 48.1964 1.59571 48.4559 1.74783 48.9272C1.77169 48.9988 4.09516 56.1422 8.73316 57.2994C9.21337 57.4187 9.50268 57.9049 9.38338 58.3851C9.28197 58.7908 8.91809 59.0622 8.51543 59.0622V59.0652Z"
            fill="white" />
          <path
            d="M24.9706 57.2845C24.6187 57.2845 24.2846 57.0757 24.1415 56.7268C23.9536 56.2704 24.1743 55.7485 24.6306 55.5606C24.6843 55.5397 29.8771 53.3803 32.5018 49.7355C32.7911 49.3358 33.3489 49.2433 33.7515 49.5327C34.1512 49.822 34.2437 50.3797 33.9543 50.7824C31.0254 54.8477 25.5403 57.1205 25.3077 57.2159C25.1973 57.2607 25.081 57.2815 24.9706 57.2815V57.2845Z"
            fill="white" />
          <path
            d="M18.2239 79.6006C18.1374 79.6006 18.0479 79.5887 17.9614 79.5618C16.5775 79.1353 15.2502 77.9274 14.0124 75.9737C13.1355 74.5868 12.6255 73.3222 12.6046 73.2685C12.4197 72.8091 12.6434 72.2902 13.1027 72.1052C13.562 71.9203 14.081 72.144 14.2659 72.6033C14.77 73.8561 16.5089 77.2413 18.4894 77.8528C18.9606 77.9989 19.2261 78.5 19.0799 78.9713C18.9606 79.356 18.6087 79.6036 18.2239 79.6036V79.6006Z"
            fill="white" />
          <path
            d="M50.5617 81.7779H50.5527C37.0921 81.6676 29.6474 77.7007 29.3372 77.5307C28.9017 77.295 28.7437 76.7522 28.9793 76.3167C29.2149 75.8813 29.7578 75.7232 30.1932 75.9588C30.2648 75.9976 37.5961 79.884 50.5706 79.9884C51.0657 79.9913 51.4624 80.397 51.4594 80.8891C51.4564 81.3812 51.0568 81.7779 50.5646 81.7779H50.5617Z"
            fill="white" />
          <path
            d="M3.01246 100.604C1.8552 100.604 1.19007 100.381 1.12445 100.357C0.659162 100.193 0.414586 99.6797 0.581614 99.2144C0.745659 98.7521 1.25271 98.5075 1.71502 98.6686C1.7866 98.6925 4.97205 99.6529 10.0336 96.2795C10.4452 96.0051 11 96.1155 11.2744 96.5271C11.5488 96.9387 11.4384 97.4935 11.0268 97.7679C7.50431 100.115 4.72151 100.604 3.01246 100.604Z"
            fill="white" />
          <path
            d="M25.94 110.45C25.7491 110.45 25.5582 110.39 25.3972 110.265C25.0034 109.964 24.9319 109.403 25.2301 109.009C26.5902 107.235 27.7027 102.448 28.0189 100.75C28.1084 100.264 28.5737 99.9422 29.0628 100.035C29.549 100.124 29.8711 100.592 29.7786 101.079C29.7279 101.344 28.5498 107.622 26.6499 110.101C26.4739 110.331 26.2084 110.45 25.94 110.45Z"
            fill="white" />
          <path
            d="M48.7124 159.142C48.3038 159.142 47.9369 158.861 47.8415 158.447C45.6791 149.075 43.3944 105.189 43.2989 103.325C43.2751 102.832 43.6539 102.409 44.146 102.385C44.6322 102.358 45.0587 102.74 45.0855 103.232C45.1094 103.685 47.4567 148.825 49.5834 158.044C49.6937 158.524 49.3954 159.007 48.9123 159.118C48.8437 159.133 48.778 159.142 48.7094 159.142H48.7124Z"
            fill="white" />
          <path
            d="M134.058 168C133.92 168 133.78 167.967 133.652 167.902C133.419 167.782 110.146 156.066 79.9973 156.066C49.8488 156.066 20.0314 166.932 19.7361 167.04C19.2708 167.213 18.7578 166.974 18.5878 166.512C18.4148 166.049 18.6534 165.533 19.1157 165.363C19.414 165.253 49.4521 154.277 79.9973 154.277C110.542 154.277 134.234 166.19 134.466 166.309C134.905 166.533 135.081 167.072 134.854 167.514C134.696 167.824 134.383 168 134.058 168Z"
            fill="white" />
          <path
            d="M90.2516 59.095C92.0619 59.095 93.5295 57.6274 93.5295 55.8171C93.5295 54.0067 92.0619 52.5391 90.2516 52.5391C88.4413 52.5391 86.9737 54.0067 86.9737 55.8171C86.9737 57.6274 88.4413 59.095 90.2516 59.095Z"
            fill="white" />
          <path
            d="M63.8583 59.095C65.6686 59.095 67.1362 57.6274 67.1362 55.8171C67.1362 54.0067 65.6686 52.5391 63.8583 52.5391C62.0479 52.5391 60.5803 54.0067 60.5803 55.8171C60.5803 57.6274 62.0479 59.095 63.8583 59.095Z"
            fill="white" />
          <path
            d="M105.561 148.541C105.081 148.541 104.685 148.162 104.667 147.679C104.655 147.39 103.593 118.455 104.195 87.3167C104.527 70.2023 104.941 48.9033 101.243 33.0446C99.3278 24.8334 96.5241 18.722 92.6705 14.3674C88.3696 9.50567 82.8875 6.97043 75.9081 6.61251C68.3889 6.22775 62.1074 8.66158 57.2308 13.8484C48.2352 23.4137 45.4047 40.8025 44.6143 53.7084C43.7523 67.7864 45.0706 79.7318 45.0826 79.8512C45.1392 80.3433 44.7843 80.7847 44.2922 80.8414C43.8 80.8981 43.3586 80.5431 43.3019 80.051C43.29 79.9317 41.9538 67.858 42.8217 53.6278C43.9939 34.4137 48.4022 20.619 55.9215 12.6255C61.1769 7.03903 67.9236 4.41431 75.9946 4.82591C89.9563 5.53876 98.7819 14.6388 102.981 32.639C106.731 48.7154 106.316 70.1397 105.982 87.3525C105.38 118.441 106.441 147.324 106.45 147.614C106.468 148.109 106.083 148.523 105.588 148.541C105.576 148.541 105.564 148.541 105.556 148.541H105.561Z"
            fill="white" />
          <path
            d="M115.55 72.8986C113.686 72.8986 112.365 72.8509 112.219 72.8449C111.724 72.827 111.339 72.4095 111.36 71.9173C111.378 71.4222 111.798 71.0434 112.287 71.0554C112.386 71.0583 122.291 71.4133 126.849 70.1367C127.326 70.0025 127.818 70.2829 127.952 70.7571C128.086 71.2343 127.809 71.7264 127.332 71.8607C124.206 72.7346 118.968 72.8956 115.55 72.8956V72.8986Z"
            fill="white" />
          <path
            d="M123.779 99.4799C118.202 99.4799 111.852 98.7014 104.768 97.1445C104.285 97.0371 103.981 96.5599 104.085 96.0797C104.189 95.5965 104.667 95.2923 105.15 95.3967C119.061 98.4509 129.998 98.4598 137.661 95.4175C143.062 93.273 146.776 88.131 147.125 82.3208C147.661 73.3251 148.1 51.5787 140.548 43.9492C138.66 42.0403 136.441 41.1753 133.783 41.3065C129.873 41.5004 126.801 43.0096 124.65 45.7924C118.214 54.117 121.662 71.1448 121.698 71.3178C121.799 71.801 121.489 72.2753 121.003 72.3767C120.519 72.4751 120.045 72.1649 119.944 71.6817C119.905 71.4998 119.016 67.1571 118.951 61.663C118.861 54.1975 120.302 48.4887 123.234 44.6978C125.721 41.4825 129.241 39.7407 133.694 39.5199C136.849 39.3589 139.584 40.4296 141.818 42.6905C145.317 46.2249 147.602 52.7092 148.604 61.9613C149.418 69.4835 149.221 77.2413 148.911 82.4282C148.523 88.9303 144.366 94.6808 138.323 97.0818C134.296 98.6805 129.435 99.4799 123.779 99.4799Z"
            fill="white" />
          <path
            d="M86.7709 77.5545H67.9504C66.3726 77.5545 65.0901 76.272 65.0901 74.6942C65.0901 67.9295 70.593 62.4236 77.3606 62.4236C84.1283 62.4236 89.6312 67.9266 89.6312 74.6942C89.6312 76.272 88.3487 77.5545 86.7709 77.5545ZM77.3606 64.2132C71.5803 64.2132 66.8797 68.9138 66.8797 74.6942C66.8797 75.2847 67.3599 75.7649 67.9504 75.7649H86.7709C87.3614 75.7649 87.8416 75.2847 87.8416 74.6942C87.8416 68.9138 83.141 64.2132 77.3606 64.2132Z"
            fill="white" />
          <path
            d="M57.9139 50.0934C57.7528 50.0934 57.5917 50.0487 57.4426 49.9592C57.025 49.6997 56.8938 49.1539 57.1503 48.7363C57.2547 48.5663 59.775 44.5785 66.1131 45.5001C66.6023 45.5717 66.9423 46.0251 66.8707 46.5142C66.7991 47.0034 66.3458 47.3434 65.8566 47.2718C60.7295 46.5262 58.755 49.5476 58.6744 49.6758C58.5044 49.9443 58.2121 50.0934 57.9139 50.0934Z"
            fill="white" />
          <path
            d="M96.8074 50.0964C96.5092 50.0964 96.2169 49.9472 96.0469 49.6728C95.9604 49.5356 93.9829 46.5232 88.8647 47.2688C88.3725 47.3404 87.9222 47.0004 87.8506 46.5112C87.779 46.0221 88.119 45.5687 88.6082 45.4971C94.9463 44.5755 97.4666 48.5633 97.571 48.7333C97.8305 49.1539 97.6963 49.7056 97.2757 49.9621C97.1296 50.0516 96.9685 50.0934 96.8104 50.0934L96.8074 50.0964Z"
            fill="white" />
          <path
            d="M102 33.2564C101.538 33.2564 101.144 32.8985 101.108 32.4302C101.07 31.9381 101.439 31.5086 101.932 31.4698C102.692 31.3624 104.92 28.3559 106.698 25.0333C106.931 24.5978 107.473 24.4338 107.909 24.6664C108.344 24.899 108.508 25.4419 108.276 25.8774C107.118 28.0398 104.198 33.0923 102.066 33.2534C102.042 33.2534 102.021 33.2534 101.997 33.2534L102 33.2564Z"
            fill="white" />
          <path
            d="M76.7403 11.4026C76.6269 11.4026 76.5136 11.3817 76.4032 11.337C75.9439 11.1521 75.7262 10.6301 75.9111 10.1708C76.9103 7.70713 74.6703 2.96772 73.7218 1.34815C73.4713 0.921634 73.6145 0.372829 74.041 0.12527C74.4675 -0.125272 75.0163 0.0178949 75.2639 0.444412C75.6576 1.11849 79.0757 7.12552 77.5694 10.8449C77.4293 11.1938 77.0922 11.4026 76.7403 11.4026Z"
            fill="white" />
          <path
            d="M50.5617 33.2564C50.5259 33.2564 50.4901 33.2564 50.4543 33.2504C48.9331 33.0715 47.1943 31.6398 45.1452 28.8809C43.7195 26.96 42.6845 25.1138 42.6398 25.0362C42.3982 24.6038 42.5533 24.0609 42.9858 23.8193C43.4182 23.5777 43.9611 23.7328 44.2027 24.1653C45.7149 26.8735 48.8049 31.2521 50.6631 31.4728C51.1552 31.5324 51.5042 31.9768 51.4475 32.466C51.3938 32.9223 51.0061 33.2564 50.5587 33.2564H50.5617Z"
            fill="white" />
          <path
            d="M60.5803 15.2443C60.473 15.2443 60.3626 15.2234 60.2552 15.1816C55.0088 13.1415 52.2111 6.3202 52.0947 6.03089C51.9098 5.57156 52.1335 5.05258 52.5899 4.86766C53.0492 4.68274 53.5682 4.90643 53.7531 5.36278C53.7889 5.45524 56.3927 11.7605 60.9025 13.5143C61.3618 13.6933 61.5914 14.2123 61.4125 14.6716C61.2753 15.0265 60.9383 15.2413 60.5774 15.2413L60.5803 15.2443Z"
            fill="white" />
          <path
            d="M125.33 50.0964C125.172 50.0964 125.014 50.0546 124.868 49.9681C123.037 48.8645 119.335 43.2423 118.921 42.607C118.649 42.1924 118.766 41.6376 119.18 41.3692C119.595 41.0978 120.15 41.2141 120.418 41.6287C121.903 43.9044 124.677 47.764 125.793 48.438C126.216 48.6945 126.353 49.2433 126.097 49.6669C125.93 49.9443 125.635 50.0994 125.33 50.0994V50.0964Z"
            fill="white" />
          <path
            d="M122.503 61.3797C122.488 61.3797 122.473 61.3797 122.458 61.3797C117.811 61.15 114.96 58.0123 114.84 57.8781C114.512 57.5082 114.542 56.9445 114.912 56.6134C115.282 56.2853 115.846 56.3152 116.174 56.685C116.209 56.7268 118.679 59.4022 122.545 59.5931C123.04 59.6169 123.419 60.0375 123.395 60.5296C123.371 61.0068 122.977 61.3797 122.503 61.3797Z"
            fill="white" />
          <path
            d="M144.98 73.8322C144.577 73.8322 144.213 73.5608 144.112 73.1521C143.993 72.6719 144.285 72.1888 144.765 72.0694C148.41 71.1687 151.864 65.4241 151.9 65.3675C152.153 64.9439 152.702 64.8037 153.126 65.0573C153.549 65.3108 153.689 65.8596 153.439 66.2831C153.284 66.5456 149.567 72.7256 145.195 73.8083C145.123 73.8262 145.052 73.8352 144.98 73.8352V73.8322Z"
            fill="white" />
          <path
            d="M138.895 48.6229C138.636 48.6229 138.379 48.5096 138.2 48.2948C137.887 47.9131 137.944 47.3494 138.329 47.0362C139.82 45.8193 141.279 40.6921 141.848 37.7482C141.941 37.2621 142.409 36.9429 142.895 37.0384C143.381 37.1308 143.697 37.6021 143.605 38.0853C143.441 38.9294 141.938 46.3979 139.459 48.4201C139.292 48.5573 139.092 48.6229 138.895 48.6229Z"
            fill="white" />
          <g opacity="0.2">
            <path
              d="M86.1863 7.96662L81.1665 5.67297C53.9469 1.70607 44.1937 28.4812 43.7762 53.6845L45.0527 80.731L33.2296 78.8162C33.2296 78.8162 39.3827 49.2016 17.2247 45.521C-1.88204 42.3445 3.56425 86.4845 3.56425 86.4845C3.56425 86.4845 7.03604 100.915 18.2239 103.969C23.879 105.514 35.3114 106.376 44.3548 106.289L48.7124 158.247L58.9369 156.043C58.9369 156.043 57.4158 132.903 56.0766 108.613L58.1733 108.443C59.4857 108.21 60.4372 107.372 60.4372 106.039L60.2701 105.135L55.5069 105.893C53.4071 77.647 53.4011 53.1715 54.6151 43.7404C60.0047 1.82835 94.3289 16.6312 94.3289 16.6312L86.1863 7.96364V7.96662Z"
              fill="white"
              fill-opacity="0.16" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_5_452">
            <rect width="153.564" height="168" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p class="empty-todos__text--primary">
        You're todo's are empty
        <span class="empty-todos__text--secondary">Please add first one</span>
      </p>
    `;
  } else {
    markup = `<ul class="todos">`;
    todosList.forEach(
      (todoItem) =>
        (markup += `
          <li class="todo" id="${todoItem.id}">
            <input type="checkbox" id="todo__completed" ${todoItem.completed ? "checked" : ""}/>
            <p class="todo__text">${todoItem.text}</p>
            <button class="btn btn--remove-todo">
              <svg
                class="remove-icon"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30.5 9.517a1.66 1.66 0 0 0-2.35 0L20 17.65 11.85 9.5a1.662 1.662 0 1 0-2.35 2.35L17.65 20 9.5 28.15a1.662 1.662 0 1 0 2.35 2.35L20 22.35l8.15 8.15a1.662 1.662 0 0 0 2.35-2.35L22.35 20l8.15-8.15a1.67 1.67 0 0 0 0-2.333z"
                  fill="#fff" />
              </svg>
            </button>
          </li>
      `)
    );
    markup += `
      </ul>
      <p class="todos__count">
        <span class="todos__count--completed">${getCompletedTodosCount()}</span>/<span class="todos__count--total"
          >${todosList.length}</span
        >
        todos completed
      </p>
    `;
  }

  todosContainer.insertAdjacentHTML("beforeend", markup);
}
renderTodosList();
