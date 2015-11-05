/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
        "name":"Xingyu Zhou (Ryan)",
        "role":"Software Developer & Student",
        "contacts":{
                  "email":"ryan.zxy@gmail.com",
                  "github":"https://github.com/perceptron-XYZ",
                  "location":"Ottawa, Canada"
        },
        "welcomeMessage":"I am also a Master's student in CS @ uOttawa",
        "skills" : ["Python","Java","C++",
                    "Web Development","Data Science"]
};

var work = {
         "jobs" : [
                  {
                     "employer":"Datacats",
                     "title":"Software Developer",
                     "location":"Ottawa, Ontario, Canada",
                     "datesWorked":"October 2015 - Present",
                     "description":"Use Python to influence governments.",
                  },
                  {
                    "employer":"University of Ottawa",
                    "title":"Teaching Assistant",
                    "location":"Ottawa, Ontario, Canada",
                    "datesWorked":"September 2015 - Present",
                    "description":"ITI1520A Introduction a l'informatique I",
                  },
                  {
                    "employer":"Wordlink",
                    "title":"Software Development Intern",
                    "location":"Montreal, Quebec, Canada",
                    "datesWorked":"July 2014 - October",
                    "description":"Participated inbackend and frontend"+
                                  "development",
                  }
         ]
};


//basic info
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//skill set
if(bio.skills.length !== 0){
  $("#header").append(HTMLskillsStart);
  for(i in bio.skills){
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
  }
}
