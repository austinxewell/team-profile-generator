

function generateManager(data) {
    
    // const {managerName, managerId, managerEmail, managerOfficeNumber} = data;

    var managerCards = ''

    for (var i=0; i < data.length; ++i){
            managerCards = managerCards + `
                <div class='column'>
                    <div class="card">
                        <div class="card-content has-background-white-ter">
                            <div class="media">
                            <div class="media-left">
                            </div>
                            <div class="media-content has-background-info py-2">
                                <p class="title is-4 has-text-white-bis">${data[i].managerName}</p>
                                <p class="title is-5 has-text-white-bis">Manager</p>
                            </div>
                        </div>                       
                            <div class="content">
                                <p>ID:${data[i].managerId}</p>
                                <p>Email:${data[i].managerEmail}</p>
                                <p>Office Number:${data[i].managerOfficeNumber}</p>
                            </div>
                        </div>
                    </div>                
                </div>
    `
    }
    return managerCards
}


























module.exports = {
    generateManager,
    // generateEngineer, 
    // generateIntern
}
