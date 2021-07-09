const editPopup = document.querySelector('.popup_type_edit')
const addCardPopup = document.querySelector('.popup_type_new-card')
const openEditButton = document.querySelector('.profile__button-edit')
const openAddButton = document.querySelector('.profile__button-add')
const editPopupClose = editPopup.querySelector('.popup__close')
const addCardPopupClose = addCardPopup.querySelector('.popup__close')

const popupImage = document.querySelector('.popup_type_image')
const closePopupImage = popupImage.querySelector('.popup__close')
const popupCardImage= document.querySelector('.popup__img')
const popupImageTitle = popupImage.querySelector('.popup__img-name')

const cardItems = document.querySelector('.cards__items')

// Функции для открытия и закрытия попапов =>

function openPopup (popup) {
  popup.classList.add('popup_opened')
}

function closePopup (popup) {
  popup.classList.remove('popup_opened')
}

//Функциональность для открытия попапов =>

openEditButton.addEventListener('click', () => {
  jobInput.value = profileDescription.textContent
  nameInput.value = profileName.textContent
  openPopup(editPopup)
})

openAddButton.addEventListener('click', () => {
  openPopup(addCardPopup)
})

//Функциональность для закрытия попапов =>

editPopupClose.addEventListener('click', () => {
  closePopup(editPopup)
  
})
addCardPopupClose.addEventListener('click', () => {
  closePopup(addCardPopup)
})

closePopupImage.addEventListener('click', () => {
  closePopup(popupImage)
})

//Функциональность редактирования профиля =>

const formPopupEdit = editPopup.querySelector('.form_type_edit')
const nameInput = document.querySelector('.form__input_type_username')
const jobInput = document.querySelector('.form__input_type_user-info')
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
const editPopupSaveButton = formPopupEdit.querySelector('.popup__submit-button')

editPopupSaveButton.addEventListener('click', () => {
  closePopup(editPopup)
})

function submitFormHandler (evt) {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileDescription.textContent = jobInput.value
}

formPopupEdit.addEventListener('submit', submitFormHandler); 

// Функциональность для добавления карточек =>

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1101&q=80'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const formAddCard = document.querySelector('.form_type_add-card');
const titleCardInput = document.querySelector('.form__input_type_title-card');
const imageCardInput = document.querySelector('.form__input_type_link-card');

function createCard(card) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  const cardTitle = cardElement.querySelector('.cards__text');
  const cardImage = cardElement.querySelector('.cards__img');
  const cardLikeButton = cardElement.querySelector('.cards__like');
  const cardDeleteButton = cardElement.querySelector('.cards__delete');

  cardTitle.textContent = card.name;
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);
  

cardLikeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('cards__like_active');
  });

  cardDeleteButton.addEventListener('click', function() {
    const deleteCardElement = cardDeleteButton.closest('.cards__item');
    deleteCardElement.remove();
  })

  cardImage.addEventListener('click', () => {
    popupCardImage.src = cardImage.src
    popupCardImage.alt = cardTitle.textContent
    popupImageTitle.textContent = cardTitle.textContent
    openPopup(popupImage)
  })

  return cardElement
};

function addCard(cardData) {
  const card = createCard(cardData);
  cardItems.prepend(card);
}

formAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault()
  addCard({
    name: titleCardInput.value,
    link: imageCardInput.value
  })
  formAddCard.reset()
  closePopup(addCardPopup)
})

const loadingCard = () => {
  initialCards.forEach(card => addCard(card))
}

loadingCard()




