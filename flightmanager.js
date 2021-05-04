class FlightManager{

    /**
     * This function retreives all the flight details.
     * return flights.
     */
    static getAllFlights(){
        let flights = JSON.parse(localStorage.getItem("FLIGHTS")) || [];
        return flights;
    }

    /**
     * This function add flight name to the local storage.
     * param{String} flightName.
     */
    static addFlight(flightId){
        let flights = this.getAllFlights();
        flights.push(flightId);    
        localStorage.setItem("FLIGHTS", JSON.stringify(flights));
    }

    /**
     * This function can help the admin to remove the flight.
     * param{String} flightName.
     */
    static removeFlight(flightId){
        let flights = this.getAllFlights();
        let index = flights.indexOf(flightId);

        if(index != -1){
            flights.splice(index, 1);
        }
        localStorage.setItem("FLIGHTS", JSON.stringify(flights));
    }

    /**
     * This function updates the flight ticket status.
     * param{String} flightName.
     * returns status.
     */
    static updateTicketStatus(flightId){
        let flights = this.getAllFlights();
        let index = flights.indexOf(flightId);
        let status = 'not confirmed';
        if(index != -1){
            status = 'confirmed';
        }
        localStorage.setItem("STATUS", JSON.stringify(status));
        return status;
    }

    /**
     * This function stores and return the booked date.
     * returns date.
     */
    static bookingDate(){
        let today = new Date().toLocaleDateString();
        localStorage.setItem('DATE BOOKED', JSON.stringify(today));
        return today;
    }
}