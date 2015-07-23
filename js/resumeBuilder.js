
var bio = {
    "name": "Niels",
    "role": "lead viking",
    "contacts": {

        "mobile": "213213",
        "email": "asdfsda@sdfsdf",
        "github": "https://sfsdaf",
        "twitter": "#titter",
        "blog": "www.myspace.com/blog",
        "location": "Moers, DE"
    },
    "welcomeMessage": "hi there!",
    "skills": [
        "plundering", "burning", "killing"
    ],
    "bioPic": "images/fry.jpg",
    "display": function displayBio() {
        // create header
        var headerName = HTMLheaderName.replace("%data%", bio.name);
        var htmlRole = HTMLheaderRole.replace("%data%", bio.role);

        $("#header").prepend(headerName + htmlRole);

        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        var blog = HTMLblog.replace("%data%", bio.contacts.blog);
        //var location = HTMLlocation.replace("%data%", bio.contacts.location);

        // add contact
        $("#topContacts").append(mobile).append(email).append(twitter).append(github).append(blog);
        $("#footerContacts").append(mobile).append(email).append(twitter).append(github).append(blog);

        //// create bio and skills

        var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var bioWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        var bioFormat = bioPic + bioWelcome + HTMLskillsStart;
        $("#header").append(bioFormat);

        for (skill in bio.skills) {
            var ski = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(ski);
        }
    }
}


var education = {
    "schools" : [
        {
            "name" : "school1",
            "location": "Olbia, IT",
            "degree" : "MS",
            "majors" : ["CS"],
            "dates" : 2013,
            "url" : "http://www.heise.de"
        },
        {
            "name" : "school2",
            "location": "Camogli,IT",
            "degree" :"MBA",
            "majors" : ["CHEM"],
            "dates" : 2014,
            "url" : "http://www.bild.de"
        }
    ],
    "onlineCourses" : [
                {
                    "title" :"javascript",
                    "school" :"Udacity",
                    "dates" : 2016,
                    "url" : "http://udacity.com"
                },
                {
                    "title" :"swordmaking",
                    "school" :"Udacity",
                    "dates" : 2016,
                    "url" : "http://udacity.com"
                }],
        "display" : function displayEducation() {
                    // create education
                    $("#education").append(HTMLschoolStart);
                    // create schools
                    for (school in education.schools)
                    {
                        var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
                        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                        var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                        var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    
                        var formattedSchool = schoolName + schoolDegree + schoolDates + schoolLocation;

                        for (major in education.schools[school].majors) {
                            var mjrItem = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                            formattedSchool += mjrItem;
                        }
                        $(".education-entry:last").append(formattedSchool);
                    }


                    $(".education-entry:last").append(HTMLonlineClasses);

                    // create onlinecourses
                    for (course in education.onlineCourses)
                    {   
                        var onlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
                        var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                        var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                        var onlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

                        var formattedOnline = onlineTitle + onlineSchool + onlineDates + onlineUrl;
                        $(".education-entry:last").append(formattedOnline);
                    }
                }
}

var work = {
    "jobs" : [
        {
            "employer" : "Thor Inc",
            "title" : "Head of Guard",
            "dates": "january 0345 - December 2014 ",
            "location" : "Frankfurt, DE",
            "description" : "Beheading, sailing, drinking, singing, robbing"
        } ,
        {
            "employer" : "Stark Enterprises",
            "title" : "Head of Guard",
            "dates": "january 2015 - today",
            "location" : "Wesel, DE",
            "description" : "getting coffee for  mr. stark and ms. pepper"
        }
    ],
    "display":function displayWork() {
    /// create jobs
    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var wrkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
        var wrkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var wrkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var wrkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var wrkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var wrkItem = wrkEmployer + wrkTitle + wrkDates + wrkLocation + wrkDesc;

        $(".work-entry:last").append(wrkItem);
    }
}

}

var experience = {
    "projects" : [
        {
            "title" : "P1",
            "dates" : 2014,
            "description" : "Some stupid accounting",
            "images" : [
                        "image1",
                         "image2"
                        ]
        },
         {
             "title" : "P2",
             "dates" : 2015,
             "description" : "Some stupid gardening",
             "images" : [
                         "image3",
                          "image4"
             ]
         }
    ],
    "display" : function displayProjects() {
                            // create projects
                            for (project in experience.projects) {
                                    $("#projects").append(HTMLprojectStart);

                                    var prjTitle = HTMLprojectTitle.replace("%data%", experience.projects[project].title);
                                    var prjDate = HTMLprojectDates.replace("%data%", experience.projects[project].dates);
                                    var prjDesc = HTMLprojectDescription.replace("%data%", experience.projects[project].description);
   
                                    var formattedPrj = prjTitle + prjDate + prjDesc + prjIMG;

                                    for (img in experience.projects[project].images)
                                    {
                                        var prjIMG = HTMLprojectImage.replace("%data%", experience.projects[project].images[img]);
                                        formattedPrj += prjIMG;
                                    }
                                    $(".project-entry:last").append(formattedPrj);
                                }
                        }
}

var map = {
    "display": function displayMap() {

        $("#map-div").append(googleMap);
    }

}

// here drwarfs shovelling html
bio.display();
work.display();
experience.display();
education.display();
map.display();
