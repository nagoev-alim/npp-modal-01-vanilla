// ⚡️ Import Styles
import './style.scss';
import feather from 'feather-icons';

// ⚡️ Render Skeleton
document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='modal-component'>
    <h3>Modal Window</h3>
    <button data-open=''>Open Modal</button>

    <div class='overlay' data-overlay=''>
      <section class='modal' data-modal=''>
        <button data-close=''>${feather.icons.x.toSvg()}</button>
        <h2>Title</h2>
        <p>“It's only after we've lost everything that we're free to do anything.”― Chuck Palahniuk, Fight Club</p>
        <button data-close=''>Close Modal</button>
      </section>
    </div>
  </div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>
`;

// ⚡️Class
class App {
  constructor() {
    this.DOM = {
      overlay: document.querySelector('[data-overlay]'),
      modal: document.querySelector('[data-modal]'),
      btnClose: document.querySelectorAll('[data-close]'),
      btnOpen: document.querySelector('[data-open]'),
    };


    this.DOM.btnOpen.addEventListener('click', this.toggleModal);
    this.DOM.overlay.addEventListener('click', this.toggleModal);
    this.DOM.btnClose.forEach(btn => btn.addEventListener('click', this.toggleModal));
    document.addEventListener('keydown', this.toggleModal);
  }

  /**
   * @function toggleModal - Show/Hide Modal
   * @param target
   * @param key
   */
  toggleModal = ({ target, key }) => {
    if (key === 'Escape') {
      this.DOM.overlay.classList.add('hidden');
      setTimeout(() => this.DOM.overlay.classList.remove('hidden', 'open'), 800);
    } else if (target.matches('[data-open]')) {
      this.DOM.overlay.classList.add('open');
    } else if (target.matches('[data-close]') || target.matches('[data-overlay]')) {
      this.DOM.overlay.classList.add('hidden');
      setTimeout(() => this.DOM.overlay.classList.remove('hidden', 'open'), 800);
    }
  };
}

// ⚡️Class Instance
new App();

