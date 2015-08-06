var bio = {
    "name": "Hagar the Terrible",
    "role": "Lead shipbuilder",
    "contacts": {
        "mobile": "+45 454 454 113",
        "email": "mastershipbuilder@valhalla.com",
        "github": "https://github.com/ships",
        "twitter": "#dragonboats",
        "blog": "www.myspace.com/blog/vikingblog",
        "location": "Trondheim, NOR",
        "locationInfo": "Born and raised here! Famous harbor city."
    },
    "welcomeMessage": "Welcome vistor Viking. Here you can see how I got a famous viking shipbuilder. Happy reading.",
    "skills": [
        "plundering", "burning", "killing", "woodchopping", "ship-building", "sawing", "hacking"
    ],
    "bioPic": "images/viking.gif",
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
        var location = HTMLlocation.replace("%data%", bio.contacts.location);

        // add contact
        $("#topContacts").append(mobile).append(email).append(twitter).append(github).append(blog).append(location);
        $("#footerContacts").append(mobile).append(email).append(twitter).append(github).append(blog).append(location);

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
    "schools": [
        {
            "name": "Goeteborg Viking Middleschool",
            "location": "Goeteborg, SE",
            "locationInfo": "Viking school class 1-4",
            "degree": "vikology level 1",
            "majors": ["Woodworking"],
            "dates": 1025,
            "url": "http://www.GVMS.edu"
        },
        {
            "name": "Ipswich School for Viking Arts",
            "location": "Ipswich,UK",
            "locationInfo": "Viking Arts Diploma and Dragonboat Racing Team Captain",
            "degree": "International Viking Management",
            "majors": ["Dragonboat building", "Sail cutting"],
            "dates": 1029,
            "url": "http://www.ipswich-viking-team.edu"
        }
    ],
    "onlineCourses": [
                {
                    "title": "Plundering 101",
                    "school": "www.vikingsight.com",
                    "dates": 1035,
                    "url": "http://www.vikingsight.com/course233"
                },
                {
                    "title": "Swordmaking at Home",
                    "school": "Udacity",
                    "dates": 1030,
                    "url": "http://udacity.com/swordmadeeasy"
                }],
    "display": function displayEducation() {
        // create education
        $("#education").append(HTMLschoolStart);
        // create schools
        for (school in education.schools) {
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
        for (course in education.onlineCourses) {
            var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var onlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            var formattedOnline = onlineTitle + onlineSchool + onlineDates + onlineUrl;
            $(".education-entry:last").append(formattedOnline);
        }
    }
}

var work = {
    "jobs": [
        {
            "employer": "Thor Inc",
            "title": "Head of Guard",
            "dates": "January 1035 - December 1039",
            "location": "Frankfurt, DE",
            "locationInfo": "Team lead to a viking special ops team.",
            "description": "Beheading, sailing, drinking, singing, robbing"
        },
        {
            "employer": "Stark Enterprises Inc",
            "title": "Personal Security",
            "dates": "January 1040 - today",
            "location": "Rome, IT",
            "locationInfo": "Taking care of personal security for the Stark's",
            "description": "Getting coffee for  Mr. Stark"
        }
    ],
    "display": function displayWork() {
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
    "projects": [
        {
            "title": "Viking Ship - ELEONOR",
            "dates": 2045,
            "description": "Creation of a new viking ship design for Thor",
            "images": [
                         "../images/ship1.jpg",
            ]
        },
         {
             "title": "Sword Series Midgard",
             "dates": 2046,
             "description": "Ultrashap and ultra mighty",
             "images": [
                          "../images/sword1.jpg",
                           "../images/sword2.jpg"
             ]
         }
    ],
    "display": function displayProjects() {
        // create projects
        for (project in experience.projects) {
            $("#projects").append(HTMLprojectStart);

            var prjTitle = HTMLprojectTitle.replace("%data%", experience.projects[project].title);
            var prjDate = HTMLprojectDates.replace("%data%", experience.projects[project].dates);
            var prjDesc = HTMLprojectDescription.replace("%data%", experience.projects[project].description);

            var formattedPrj = prjTitle + prjDate + prjDesc;

            for (img in experience.projects[project].images) {
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
