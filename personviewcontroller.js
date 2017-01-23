
var viewController = new ViewController(); //Khoi tao va dat ten cho ViewController

function ViewController(){

    this.personModel = new PersonModel();

    this.updateView = function(){

        var results = document.getElementById("resultBox");
            //scan all data in persons array va 
            //truy xuat data vao bien result da duoc ket noi thong qua id resultBox
        for(var i = 0; i < this.personModel.getPersons().length; i++)

        {
            var onePerson = this.personModel.getPersons()[i];

            results.innerHTML += onePerson.name;

        }

    }

    this.addPersonxx = function(name){
        var newPerson = new Person(name);
        this.personModel.addPerson(newPerson);
        this.updateView();

    }

}