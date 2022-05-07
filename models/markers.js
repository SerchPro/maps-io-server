


class Markers {
    constructor(){
        this.actives = {};
    }

    add( marker ){
        this.actives[ marker.id ] = marker;
        return marker
    }

    remove( id ){
        delete this.actives[ id ];
    }

    update( marker ){
        this.actives[ marker.id ] = marker;
    }
}

module.exports = Markers;