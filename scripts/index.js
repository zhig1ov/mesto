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

function submitFormProfile (evt) {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileDescription.textContent = jobInput.value
}

formPopupEdit.addEventListener('submit', submitFormProfile); 

// Функциональность для добавления карточек =>

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




