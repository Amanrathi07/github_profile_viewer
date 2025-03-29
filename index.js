

    let btn=document.getElementById('btn');


    btn.addEventListener('click',()=>{
        console.log('i am clicked');
        
        let userId=document.getElementById('search');
        

        gitApi(userId.value);
    })


    async function gitApi(name){

        let data= await fetch(`https://api.github.com/users/${name}`)
        let result= await data.json();
            
        changeScr(result) 
    }


    function changeScr({login,avatar_url,html_url,followers,following,bio,public_repos}){

            let mainDiv= document.getElementById('mainDiv')

            mainDiv.innerHTML=` <div class="mainDiv" id="mainDiv">
            <div class="firstDiv">
                <div class="heading"> <h1>git-hub profile viwer</h1></div>
                <div class="search">
                    <input type="text" placeholder="profile Id " id="search">
                    <button id="btn">search</button>
                </div>    
            </div>

            <div class="secondDiv">
                <div class="userImg">
                    <div class="img">
                        <img src="${avatar_url}" class="idImg">
                    </div>
                    <div class="info">
                        <p>${login}</p>
                        <p>${bio || "bio not found"}</p>
                    </div>
                </div>

                <div class="organiser">
                <div class="userInformation">
                    <div class="following">
                        <p>following</p>
                        <p>${following}</p>
                    </div>
                    <div class="followers">
                        <p>followers</p>
                        <p>${followers}</p>
                    </div>
                    <div class="repos">
                        <p>repos</p>
                        <p>${public_repos}</p>
                    </div>
                </div>
                <a  target="_blank" href="${html_url}" class="link"><b>visit git-hub  profile</b></a>
                </div>
                
            </div>
        </div>`

        let btn = document.getElementById('btn');
        btn.addEventListener('click', () => {
            let userId = document.getElementById('search');
            gitApi(userId.value);
        });    
        
        
            
    }