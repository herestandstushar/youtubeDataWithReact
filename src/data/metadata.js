const MetaData ={
    correlation:{
        heatmap:{
            text:"The first figure shows the heatmap of the dataset representing the correlation between each attribute.This heat map is created from the seaborn library of the python. The light color or the one represents the correlation of attributes with itself no two attributes can have a correlation of one. The lighter the color of the map the higher the correlation between the attributes. The dark color shows that the combining two attributes does not have a correlation and doesn't go hand to hand. The highest correlation is between the likes and views and the lowest correlation is between the rating diabled and publish month.",
            imgUrl: "/assets/images/download.png"
        },
        graph:{
            text:'This is another representation of the correlation by the bar graph. But this shows the correlation of the attributes with the views attribute of the dataset. Higher the graph the stronger the correlation, as we can see in the figure that the highest correlation lies between the views and likes. Also there is good correlation with comment count and dislikes.',
            imgUrl: '/assets/images/graph.png'
        },
        scatter:{
            text: 'This scatter plot represents the relation between the views and likes, Views lie on the x-axis and likes lie on the y-axis. In the initial stage plot shows a good trend between both the attributes however as the data progress the relation becomes quite vague',
            imgUrl: '/assets/images/scatter.png'
        }
    },
    dataImpurities:{
        text: 'There a lot of missing values present in the dataset and lot of null values too. So as we use the predifned funtion to determine the null values so we get that there are 1275 missing values in discription attribute and rest of the dataset is good to go. But this will not effect our model because description has no correlation with the other attributes so we can drop it from the dataset  '
    },
    dv : {
        bar: {
            text: 'Data Visualization helps us to see the insights of the data through different angles. This the bar plot showing the number of videos or the dataset have been created in 2018 as you can see the number of videos is high in 2018 as compared to 2017',
            imgUrl: '/assets/images/dv1.png'
        },
        hist:{
            text: 'This plot shows the histogram and it is created  to see how many videos have between 10 million and 20 million views, how many videos have between 20 million and 30 million views, and so on',
            imgUrl: '/assets/images/dv3.png'
        },
        plot:{
            text: 'This bar plot is created with the help of seaborn and you can see that it is created to determine the number of views on a video with respect to a particular month. October has the higher number of views',
            imgUrl: '/assets/images/dv2.png'
        }
    },

    da:{
        pie: {
            text : 'Now we want to see how many trending video titles contain at least a capitalized word (e.g. HOW). To do that, we will add a new variable (column) to the dataset whose value is True if the video title has at least a capitalized word in it, and False otherwise',
            imgUrl: '/assets/images/pie.png'
        },
        title:{
            text: 'We can see that title-length distribution resembles a normal distribution, where most videos have title lengths between 30 and 60 character approximately',
            imgUrl : '/assets/images//title.png'
        },
        cloud:{
            text:'Lets see if there are some words that are used significantly in trending video titles. We will display the 25 most common words in all trending video titles',
            imgUrl: '/assets/images/cloud.png'
        },
        High:{
            text: 'Which genere has the highest number of views on youtube',
            imgUrl: '/assets/images/high.png'
        }

    }

}

export default MetaData