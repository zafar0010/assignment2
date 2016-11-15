exports.home=function(req,res){
  res.render('home',{title:'iLoveCricket',
                    headline:'We believe that every team have something different'
                    });
                  }


exports.team=function(req,res){
    var teamName=req.params.team;
    var title,heading;
    var imageCount=4;

    if(teamName==='australia'){
       title="Australia";
       heading="Australia: Cricket isn't life or death. It is much more important.";
    }
    else if(teamName==='india'){
       title="India";
       heading="India: Teamwork makes the dream work!";
    }
    else if(teamName==='england'){
       title="England";
       heading="England: East or west cricket is the best.";
    }
    else if(teamName==='southAfrica'){
       title="SouthAfrica";
       heading="SouthAfrica: Keep calm and bat on.";
    }
    else if(teamName==='newZealand'){
       title="NewZealand";
       heading="NewZealand: one team, one dream.";
       imageCount=6;
    }

    res.render('team',{
        title:title,
        headline:heading,
        team:teamName,
        numberOfImages:imageCount});
  }
