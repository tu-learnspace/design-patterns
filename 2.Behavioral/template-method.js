// Tên: Nguyến Huy Tú
// MSSV: 18120254
// Bài tập 04: tự chọn cài đặt mẫu Template Method đến mức mình hiểu
// Tham khảo: https://www.pluralsight.com/courses/javascript-practical-design-patterns


// Ý tưởng: gần giống mẫu Strategy, tuy nhiên chỉ định nghĩa khung => lớp con làm việc đó


// xét vd implement 1 chess game đơn giản: có 2 người chơi lần lượt. Khi nào đi đủ 10 bước là end.
class Game{
    constructor(numberOfPlayers) {
        this.numberOfPlayers = numberOfPlayers;
        this.currentPlayer = 0;
    }

    // template method
    // => define khung sườn. algorithm is in the base class (stay like this all the time)
    // khác vs strategy: hàm run này sẽ ở 1 nơi khác (helper bên ngoài)
    run(){
        this.start();
        while(!this.haveWinner){
            this.takeTurn();
        }
        console.log(`Player ${this.winningPlayer} wins.`);
    }

    // chỉ define khung sườn, ruột là rỗng, do thằng con quyết định
    start(){}
    get haveWinner(){}      // getter: not calculate the property's value until it is accessed
    takeTurn(){}
    get winningPlayer(){}

}

// lớp kế thừa sẽ định nghĩa
class Chess extends Game{
    constructor() {
        super(2);   // call base class: có 2 người chơi
        this.maxTurns = 10;
        this.turn = 1;
    }

    // override mọi method của class cha, ngoại trừ template method => ko cần override run()
    start() {
        console.log(
            `Starting a game of chess` +
            `with ${this.numberOfPlayers} players.`
        );
    }

    get haveWinner() {
        return this.turn == this.maxTurns;
    }

    takeTurn() {
        console.log(
            `Turn ${this.turn++} taken by ` +
            `player ${this.currentPlayer}.`
        )
        this.currentPlayer = (this.currentPlayer + 1) % this.numberOfPlayers;
    }

    get winningPlayer() {
        return this.currentPlayer;
    }
}


let chess = new Chess();
chess.run(); // calling template method from base class


// template method summary:
// + Define thuật toán ở mức high level
// + Define phần cấu tạo bên trong là những method/property rỗng
// + Kế thừa lớp thuật toán & override những cái cần thiết