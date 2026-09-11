# AutoMarket

AutoMarket is a static car marketplace demo. Open `index.html` in a browser to
run it.

## GitHub Workflow

- `main`: deployable final version. Do not commit directly to this branch.
- `develop`: integration branch. Feature branches are merged here by pull
  request.
- `feature/common`: shared project files.
- `feature/homepage`: homepage (`index.html`).
- `feature/seller-page`: seller center (`seller.html`).
- `feature/registration`: seller registration (`register.html`).
- `feature/add-car`: add-car form (`add-car.html`).
- `feature/login`: seller login (`login.html`).
- `feature/search`: car search (`search.html`).

## Module Ownership

### Common

- `.gitignore`
- `css/style.css`
- `js/main.js`

### Student A

- `feature/homepage` -> `index.html`
- `feature/seller-page` -> `seller.html`
- `feature/registration` -> `register.html`

### Student B

- `feature/add-car` -> `add-car.html`
- `feature/login` -> `login.html`
- `feature/search` -> `search.html`
