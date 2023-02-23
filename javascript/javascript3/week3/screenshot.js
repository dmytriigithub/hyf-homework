class Screenshots {
    constructor() { 
        this.urlInput = document.querySelector('.postInput');   
        this.deleteInput= document.querySelector('.deleteInput');   
        this.inputs = document.querySelectorAll('input');   
        this.currentList = document.querySelector('.currentList');  
        this.fullCollection = document.querySelector('.fullCollection');

        this.screenShotOptions = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c4c71f72f4msh1b9d8f48e635255p185dabjsn218387ea6564',
                'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
            }
        };
        
        this.getListOptions = {
            method: 'GET',	
        };
        
        this.deleteListOptions = {
            method: 'DELETE',	
        };
    }

    renderScreen(id, screenshotUrl, url, user) {
        const listElement = document.createElement('li');
        listElement.classList.add('currentListItem');
        listElement.innerHTML = `
        ScreenshotUrl - <a href="${screenshotUrl}" target="_blank">${screenshotUrl}</a><br>
        User URL - <a href="${url}" target="_blank">${url}</a><br>
        Post id - ${id}<br>
        User - ${user}
        `;
        //------------------------------------
        this.currentList.append(listElement);

        const img = document.createElement('img');
        img.src = screenshotUrl;
        listElement.appendChild(img);
    }

    renderCollection(id, screenshotUrl, url, user) {
        const listElement = document.createElement('li');
        listElement.classList.add('fullCollectionItem');
        listElement.innerHTML = `id: ${id},<br> screenshotUrl: <a href="${screenshotUrl}" target="_blank">${screenshotUrl}</a>,<br> url: <a href="${url}" target="_blank">${url}</a>,<br> user: ${user}`;
        this.fullCollection.append(listElement);
    }

    async getResource(url, options) {
        let response = await fetch(url, options);
        if (options.method === 'DELETE') {
            return null;
        } else{
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
        
            return await response.json();
        }
    }
    
     async postData(url, data) {
        let result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        });
    
        return await result.json();
    }
    
    
    getScreenshot() {
        if (this.urlInput.value) {
            const url = (`https://website-screenshot6.p.rapidapi.com/screenshot?url=${this.urlInput.value}&width=1920&height=1080&fullscreen=true`);
        
            this.getResource(url, this.screenShotOptions)
                .then(data => {
                    data.url = this.urlInput.value;
                    //---------------------------------------------------------
                    data.user = dataUser.email;
                    this.postScreenshot(data);
                })
                .catch(error => {
                    console.log(error);
                });
        }else{
            alert('You have to put Url');
        }
            
    }
    
    postScreenshot(data) {
        const url = `https://crudcrud.com/api/ce64f626ce31465592a412be09c55354/unicorns`;
        
        this.postData(url, data)
            .then(data => {
                
                new Screenshots().renderScreen(data._id, data.screenshotUrl, this.urlInput.value, data.user);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.clearInput();
            });
        
        
    }
    
    
    getCollection() {
        const url = `https://crudcrud.com/api/ce64f626ce31465592a412be09c55354/unicorns`;
        this.getResource(url, this.getListOptions)
            .then(data => {
                console.log(data);
                document.querySelectorAll('.fullCollectionItem').forEach(e => e.remove());
                data.forEach(element => {
                    console.log(element);
                    //----------------------------------------------------------
                    if (element.user === dataUser.email) {
                        new Screenshots().renderCollection(element._id, element.screenshotUrl, element.url, element.user);
                    }
                    
                    // const myJSON = JSON.stringify(element);
                    // const listElement = document.createElement('li');
                    // listElement.classList.add('fullCollectionItem');
                    // listElement.innerHTML = myJSON;
                    // fullCollection.append(listElement);
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    clearScreenshotsCollection() {
        const url = `https://crudcrud.com/api/ce64f626ce31465592a412be09c55354/unicorns`;
        this.getResource(url, this.getListOptions)
            .then(data => {
                console.log(data);
                for (const i of data) {
                    this.deleteCollectionItem(i._id);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    deleteCollectionItem(id) {
        const url = `https://crudcrud.com/api/ce64f626ce31465592a412be09c55354/unicorns/${id}`;
        this.getResource(url, this.deleteListOptions)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    deleteCollectionItemWithId() {
        if (this.deleteInput.value) {
            const url = `https://crudcrud.com/api/ce64f626ce31465592a412be09c55354/unicorns/${this.deleteInput.value}`;
            this.getResource(url, this.deleteListOptions)
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    this.clearInput();
                });
        }else{
            alert('You have to input Id');
        }
    }
    
    clearInput() {
        this.inputs.forEach(element => {
            element.value = '';
        });
    }

    crearCurrentScreenshots() {
        document.querySelectorAll('.currentListItem').forEach(e => e.remove());           
    }  
    
    hideList() {
        document.querySelectorAll('.fullCollectionItem').forEach(e => e.remove());           
    }
}
 