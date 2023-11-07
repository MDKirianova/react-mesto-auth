class Api {
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _sendRequest(baseUrl, options){
    return fetch(baseUrl,options)
    .then(res=>{
      if (res.ok) {
        return res.json()
      } 
      
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  getUserInfo() {
    return this._sendRequest(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
  }

  getInitialCards() {
    return this._sendRequest(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
  }

  setUserInfo(name, about) {
    return this._sendRequest(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about})
    })
  }

  setUserAvatar(avatar){
    return this._sendRequest(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar })

    })
  }
  
  createNewCard(name, link) {
    return this._sendRequest(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link})
    })
  }

  deleteMyCard(id){
    return this._sendRequest(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  changeLikeCardStatus(id, isLiked){
    if(isLiked){
      return this._sendRequest(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this._headers,
      })
    } else {
      return this._sendRequest(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this._headers,
      })
    }
  }
}

const apiSettings = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-75',
  headers: {
    authorization: 'd9427d48-215a-411e-b01d-44ad22fcdd68',
    'Content-Type': 'application/json'
  }
}; 

export const api = new Api(apiSettings);