let seatCount = 0;
let seatLeft = 40;
const allSeat = document.querySelectorAll('.seat_btn');

for(const seat of allSeat){
    seat.addEventListener('click', function(e){
        // added btn style
        console.log(e.target);
        e.target.style.backgroundColor = '#1DD100';
        e.target.style.color = '#FFFFFF';
        e.target.setAttribute('disabled', true)

        // counted selected seat & availavle seat
        seatCount += 1;
        setInnerText('seat_count', seatCount)
        seatLeft -= 1;
        setInnerText('seat_left', seatLeft);
    })
}