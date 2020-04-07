function mora(x, y){
    // 假设x，y分别是两个人出的手势
    switch (x){
        case 1:
            switch(y){
                case 1:
                    console.log(`平手`);
                    break;
                case 2:
                    console.log(`${y}赢了`);
                    break;
                case 3:
                    console.log(`${x}赢了`);
                    break;
            }
            break;
        case 2:
            switch(y){
                case 1:
                    console.log(`${x}赢了`);
                    break;
                case 2:
                    console.log(`平手`);
                    break;
                case 3:
                    console.log(`${y}赢了`);
                    break;
            }
            break;
        case 3:
            switch(y){
                case 1:
                    console.log(`${y}赢了`);
                    break;
                case 2:
                    console.log(`${x}赢了`);
                    break;
                case 3:
                    console.log(`平手`);
                    break;
            }
            break;
    }
}

mora(1, 2)