//---------------------------------------------------main

const buttonSing = document.querySelector('.sing'),
      buttonLog = document.querySelector('.log'),
      buttonSingUp = document.querySelector('.singUp'),
       
      blockSing = document.querySelector('.block_singUp'),
      blockLog = document.querySelector('.block_logIn'),
      blockButtons = document.querySelector('.block_buttons'),
      blockScreenshot = document.querySelector('.block_screenshot');

window.addEventListener('load', function() {
    blockLog.classList.add('hidden');
    blockSing.classList.add('hidden');
    blockScreenshot.classList.add('hidden');

});

buttonSing.addEventListener('click', function(){
   
    blockButtons.classList.add('hidden');
    blockSing.classList.remove('hidden');

});

buttonLog.addEventListener('click', function(){
   
    blockButtons.classList.add('hidden');
    blockLog.classList.remove('hidden');
    
});

///------------------------------------------------------------------------------users

const   buttonGetUsers = document.querySelector('.getUsers'),
        buttonLogIn = document.querySelector('.logIn'),
        buttonGetUsersLog = document.querySelector('.getUsersLog'),
        buttonDeleteAllUsers = document.querySelector('.deleteAllUsers'),  
        buttonIdDeleteUsers = document.querySelector('.idDeleteUsers'); 

window.addEventListener('DOMContentLoaded', () => {
    new Users().singUp();
    
});

buttonGetUsers.addEventListener('click', () => {
    new Users().getUsers();
    
});

buttonGetUsersLog.addEventListener('click', () => {
    new Users().getUsers();
    
});

buttonIdDeleteUsers.addEventListener('click', () => {
    new Users().deleteCollectionItemWithId();
    
});

buttonDeleteAllUsers.addEventListener('click', () => {
    new Users().clearCollection();
    
});

window.addEventListener('DOMContentLoaded', () => {
    new Users().logIn();
});


//------------------------------------------------------------------screenshot

const buttonPost = document.querySelector('.post'),  
      buttonList = document.querySelector('.list'),
      buttonClearCurrentList = document.querySelector('.clearCurrentList'),
      buttonHideList = document.querySelector('.hideList'),
      buttonDeleteAllScreenshots = document.querySelector('.deleteAllScreenshots'),  
      buttonIdDeleteScreenshots = document.querySelector('.idDeleteScreenshots');


buttonPost.addEventListener('click', () => {
    new Screenshots().getScreenshot();
});
buttonList.addEventListener('click', () => {
    new Screenshots().getCollection();
});
buttonDeleteAllScreenshots.addEventListener('click', () => {
    new Screenshots().clearCollection();
});
buttonIdDeleteScreenshots.addEventListener('click', () => {
    new Screenshots().deleteCollectionItemWithId();
});

buttonClearCurrentList.addEventListener('click', () => {
    new Screenshots().crearCurrentScreenshots();
});

buttonHideList.addEventListener('click', () => {
    new Screenshots().hideList();
});