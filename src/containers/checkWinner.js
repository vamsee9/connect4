function checkWinner(boxes){

    let wintext = "";
    let p1score = 0;
    let p2score = 0;
    let winstatus = false;
    let countGrey = 0;

    // check winner based on horizontal position

    for (let j = 0; j <=5; j ++) {
    	
        // loop for 4 first positions of a new row
        for (let k = 0; k <= 3; k++) {
            let i = j * 7 + k;		// position to check
 
            if(boxes[i] === boxes[i+1] && boxes[i] === boxes[i+2] && boxes[i] === boxes[i+3] && boxes[i] !== "white"){
                if(boxes[i] === "pink") {
                    wintext = "player 1 wins";
                    p1score = 1;
                    winstatus = true;
                    // return "one";
                } else if (boxes[i] === "magenta") {
                    // return "two";
                    wintext = "player 2 wins";
                    p2score = 1;
                    winstatus = true;
                } 
            } 
        } 
    }

    // check winner based on vertical position

      // loop over the top 3 rows
    for (let j = 0; j <= 2; j++) {

    // loop for all positions in a row
        for (let k = 0; k <= 6; k++) {
        let i = j * 7 + k; // position to check

        if (boxes[i] === boxes[i + 7] && boxes[i] === boxes[i + 2*7] && boxes[i] === boxes[i + 3*7] && boxes[i] !== "white") {
            if(boxes[i] === "pink"){
                wintext = "player 1 wins";
                p1score = 1;
                winstatus = true;
            } else if (boxes[i] === "magenta"){
                wintext = "player 2 wins";
                p2score = 1;
                winstatus = true;
            } 
        }
    }
  }

  // check winner based on diagonal right 

  // loop over the column
  for (let j = 0; j <= 3; j++){

    // loop over the row
    for (let k = 0; k <= 2; k++){
        let i = j + k * 7 

        if (boxes[i] === boxes[i + 8] && boxes[i] === boxes[i + 2*8] && boxes[i] === boxes[i + 3*8] && boxes[i] !== "white") {
            if(boxes[i] === "pink"){
                wintext= "player 1 wins";
                p1score = 1;
                winstatus = true;
            } else if (boxes[i] === "magenta"){
                wintext = "player 2 wins";
                p2score = 1;
                winstatus = true;
            } 
        }
    }
  }

   // check winner based on diagonal left

  // loop over the column
  for (let j = 3; j <= 6; j++){

    // loop over the row
    for (let k = 0; k <= 2; k++){
        let i = j + k * 7 

        if (boxes[i] === boxes[i + 6] && boxes[i] === boxes[i + 2*6] && boxes[i] === boxes[i + 3*6] && boxes[i] !== "white") {
            if(boxes[i] === "pink"){
                wintext = "player 1 wins";
                p1score = 1;
                winstatus = true;
            } else if (boxes[i] === "magenta"){
                wintext = "player 2 wins";
                p2score = 1;
                winstatus = true;
            } 
        }
    }
  }

  // check if its draw 

  for ( let i = 0; i < boxes.length; i++) {
      if (boxes[i] === "magenta") {
          countGrey++
      }
  }

  if (countGrey === 21 && wintext === "") {
        wintext = "It's a draw";
        winstatus = true;
  }

  return [wintext, p1score, p2score, winstatus];
}

export {checkWinner};