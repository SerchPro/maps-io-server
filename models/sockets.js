const Markers = require("./Markers");


class Sockets {

    constructor( io ) {

        this.io = io;
        this.markers = new Markers();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            socket.emit('active-markers', this.markers.actives);
            socket.on('new-marker', (marker) =>{
                console.log("new marker", marker)
                this.markers.add(marker)
                socket.broadcast('new-marker', marker)
            })

        });
    }


}


module.exports = Sockets;