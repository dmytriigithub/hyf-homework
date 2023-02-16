class Users {
    constructor() {
        this.form = document.querySelector('form');
        this.formLog = document.querySelector('.formLog');
        this.email = document.querySelector('[type="email"]');
        this.password = document.querySelector('.password');
        this.emailLogIn = document.querySelector('.emailLogIn');
        this.passwordLogIn = document.querySelector('.passwordLogIn');
        this.inputs = document.querySelectorAll('input');
        this.fullCollection = document.querySelector('.fullCollection');
        this.deleteInput = document.querySelector('.deleteInputUser'); 
        this.url = 'https://crudcrud.com/api/ce64f626ce31465592a412be09c55354/users';
    }

    clearInputs() {
        this.inputs.forEach(item => {
            item.value = '';
        }); 
    }

    checkMailInputs(){
        this.email.addEventListener('keypress', function(e) {
            if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                e.preventDefault();
            }
        });
    }

    async getResource(url){
        let response = await fetch(url, {
            method: 'GET'	
        });
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
    
        return await response.json();
    }

    async deleteResource(url){
        await fetch(url, {
            method: 'DELETE'	
        });
        return null;
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        });
    
        return await res.json();
    }

    singUp() {

        this.checkMailInputs();

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (this.email.value !== '' && this.password.value !== '') {
                const formData = new FormData(this.form);
                const arrData = [];
                for (let obj of formData) {
                    arrData.push(obj);
                    
                }

                const logData = Object.fromEntries(arrData);
  
                this.getResource(this.url)
                    .then(res => {
                        const email = [];  
                        res.forEach(element => {
                            email.push(element.email);
                        });
                        if(email.includes(logData.email)) {
                            console.log('bye');
                            alert('User already has been singed');
                        }else {
                            this.postData(this.url, Object.fromEntries(arrData))
                                .then(res => {
                                    console.log(res);
                                    console.log('hi');
                                    blockLog.classList.remove('hidden');
                                    blockSing.classList.add('hidden');
                                    document.querySelectorAll('.fullCollectionItem').forEach(e => e.remove());
                                })
                                .catch((error) => {
                                    console.error(error);
                                })
                                .finally(() => {
                                    this.clearInputs();
                                });
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                    .finally(() => {
                        this.clearInputs();
                    }); 
            }else{
                alert('You have to put Email and Password');
            }
        });
    
    }

    logIn(){
        this.checkMailInputs();

        this.formLog.addEventListener('submit', (e) => {
            e.preventDefault();

            if (this.emailLogIn.value !== '' && this.passwordLogIn.value !== '') {
                const formData = new FormData(this.formLog);
                const arrData = [];
                for (let obj of formData) {
                    arrData.push(obj);
                }

                const logData = Object.fromEntries(arrData);
                //--------------------------------------------------------------
                dataUser = Object.fromEntries(arrData);
                console.log(dataUser);
                //-----------------------------------------------------------------
  
                this.getResource(this.url)
                    .then(res => {
                        const email = [];
                        const password = [];    
                        res.forEach(element => {
                            email.push(element.email);
                            password.push(element.password);
                        });
                        if(email.includes(logData.email) && password.includes(logData.password)) {
                            console.log('hi');
                            blockLog.classList.add('hidden');
                            blockScreenshot.classList.remove('hidden');
                            document.querySelectorAll('.fullCollectionItem').forEach(e => e.remove());

                            const title = document.createElement('h1');
                            title.innerHTML = `User: ${dataUser.email}`;
                            title.style.cssText = `
                                margin-bottom: 30px;
                                text-align: center`;
                                
                            document.querySelector('.block_screenshot').insertBefore(title, document.querySelector('.postInput'));
                        }else {
                            console.log('bye');
                            alert('Wrong email or password');
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                    .finally(() => {
                        this.clearInputs();
                    });
            }else{
                alert('You have to put Email and Password');
            }
        });
    }

    getUsers() {
        this.getResource(this.url)
            .then(data => {
                console.log(data);
                document.querySelectorAll('.fullCollectionItem').forEach(e => e.remove());
                data.forEach(element => {
                    console.log(element);
        
                    const myJSON = JSON.stringify(element);
                    const listElement = document.createElement('li');
                    listElement.classList.add('fullCollectionItem');
                    listElement.innerHTML = myJSON;
                    this.fullCollection.append(listElement);
                });
            })
            .catch(error => {
                console.log(error);
            });
    }


    clearUsersCollection() {
        this.getResource(this.url)
            .then(data => {
                console.log(data);
                for (const i of data) {
                    console.log(i._id);
                    this.deleteCollectionItem(i._id);
                }
                new Screenshots().clearScreenshotsCollection();
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    deleteCollectionItem(id) {
        this.deleteResource(`${this.url}/${id}`)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    deleteCollectionItemWithId() {
        this.deleteResource(`${this.url}/${this.deleteInput.value}`)
            .then(data => {          
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.clearInputs();
            });
        //-------------------------------------    
    }
}

let dataUser;