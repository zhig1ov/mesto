const popupProfile = document.querySelector('.popup_type_edit')
const popupAddCard = document.querySelector('.popup_type_new-card')
const buttonProfileEdit  = document.querySelector('.profile__button-edit')
const buttonAddCard = document.querySelector('.profile__button-add')
const popupProfileClose = popupProfile.querySelector('.popup__close')
const popupCloseAddCard = popupAddCard.querySelector('.popup__close')

const popupImage = document.querySelector('.popup_type_image')
const PopupImageClose = popupImage.querySelector('.popup__close')
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

buttonProfileEdit .addEventListener('click', () => {
  jobInput.value = profileDescription.textContent
  nameInput.value = profileName.textContent
  openPopup(popupProfile)
})

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard)
})

//Функциональность для закрытия попапов =>

popupProfileClose.addEventListener('click', () => {
  closePopup(popupProfile)
  
})
popupCloseAddCard.addEventListener('click', () => {
  closePopup(popupAddCard)
})

PopupImageClose.addEventListener('click', () => {
  closePopup(popupImage)
})

//Функциональность редактирования профиля =>

const formPopupEdit = popupProfile.querySelector('.form_type_edit')
const nameInput = document.querySelector('.form__input_type_username')
const jobInput = document.querySelector('.form__input_type_user-info')
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
const popupProfileSaveButton = formPopupEdit.querySelector('.popup__submit-button')

popupProfileSaveButton.addEventListener('click', () => {
  closePopup(popupProfile)
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
  const buttonLikeCard = cardElement.querySelector('.cards__like');
  const buttonDeleteCard = cardElement.querySelector('.cards__delete');

  cardTitle.textContent = card.name;
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);
  

buttonLikeCard.addEventListener('click', function(evt) {
    evt.target.classList.toggle('cards__like_active');
  });

  buttonDeleteCard.addEventListener('click', function() {
    const deleteCardElement = buttonDeleteCard.closest('.cards__item');
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
  closePopup(popupAddCard)
})

const loadingCard = () => {
  initialCards.forEach(card => addCard(card))
}

loadingCard()




