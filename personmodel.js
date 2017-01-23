function PersonModel(){ 
  
  //store person in array
    this.persons = new Array();

  //tao function de dung lenh push person vao array persons cho this.addPerson

    this.addPerson = function(person)

  {

    this.persons.push(person);

  }

    //Lay nhung gia tri person vua add trong persons array

    this.getPersons = function(){

        return this.persons;

    }

}