function main(){

    let confirm = document.getElementById('mainResult').innerHTML;
    if(confirm == 'You Have Lost.'){
        alert('Game Over. Restart!');
    }
    else{

        let x = Math.floor(Math.random()*13)+1;

        let currentTotal = parseInt(document.getElementById('score').innerHTML);
        let total = currentTotal + x;
        document.getElementById('score').innerHTML = total;

        if(total <21){
            document.getElementById('mainResult').innerHTML = 'Generate Another Card.';
        }

        else if(total == 21){
            document.getElementById('mainResult').innerHTML = 'You Have Won!!!!!';
            document.getElementById('restartButton').style.display = "block";
            alert('Congratulations!');
            
        }

        else if(total > 21){
            document.getElementById('mainResult').innerHTML = 'You Have Lost.';
            document.getElementById('restartButton').style.display = "block";
            alert('Lost the Game :( Click restrt to try again.');
        }
        
        var img = document.createElement('img');
        img.src = "images/" + x + ".png";
        img.height = 300;

        document.body.appendChild(img);
    }

}

function restartGame(){
    location.reload();
}