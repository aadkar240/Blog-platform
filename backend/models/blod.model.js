const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: true,
            maxlength:200,
        },
        slug:{
            type:String,
            required: true,
            unique: true,
            lowercase: true
        },
        content:{
            type:String,
            required: true
        },
        coverImage:{
            type:String,
            default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAA3lBMVEVDseI+os/////29vb0hWJJs+MXFxiQ1e7+0ly7vb/2+PkAAAALCwwwMDHq6uozgqERERIlJSVOTk7Z2dmFvtwNAAA8qNgzgKSZmZnNzc3r5OFOboBhu+X6yLvzdErzelH94dv70MT1j3H/673+1m7v+f3/+uuBz+zV7/iq3fD/6LP/9NX+2oH/3Y2e2vD+zEPI6fhvtdgkntFhpsmWs8Q3j7UlVGckLzcvaIFAQECIiIivr6//9d7+4Zz/5af8wbEzGw4vIBllZWZ7e3uawte2y9eluMPN3efHvrnizsQGMDCTAAAEPklEQVR4nO3cbVPaQBSG4YAmSoKIYFCsWq2GhkIVotZa+25r2///h0p0ppOdwrpZuuc86Zy7fqXINXuWhGA8XyrkSZIkSZIkSZIkSZIkSZIkSZIkseT7nlwb+ZPfu9okb6eG6tF7EzN0fYXp4b+NAobia8x58eN2EDQj2mZPGYMujzgI2hsd0m6CdhDv9Lhf+dzioN1+1yXt9qaZc0B65By7ddL6nSjnqCF6MHIgenBy1Lhf/N+xcuB58HLAjQsvB9zyYOZA8+DmABsXbg4wD+FQYufA8uDngPIQDiUdRzp5+Jf/pJNJGr4/URocHWg7XjHjQPLQcZy9LDZMXp0XWx8dHD7XdLh6ZMgBdPCh4xiuFco51oudjg5Wtb0w5sBZHhAcOB4YHDAeIBwo2wcKB4gHDAfGuMBwYCwPHA4IDyAOhHEB4kDwQOIAGBcoDn4PLcdZsWFyclps7ICDfVyW+bzj33OwLw8dx0CtHiZKLji4PXQcH8bFPg7SoVLqgoN5XHQc4/PCznn+ejBZU3LCwbw8tBzrOo4zNxy8HngcrOOCx8HqAcjBOS6IHIzLA5GD0QOSg89DOCrAweYBysH17oLKwbQ89OcsxcaDiXIJey39dKjN/JI1joeOY6R8f2FUT1Kl5OhYn+kXGoDGBeDrLkgewBwc4wLMweGBzMEwLtAc9B7YHOTjgs1BvjzAOag90DmIxwWdg9gDnoN2XPA5SJcHPgepB98fnRtzUHrktyQItkgL8js04HLM1gdtQUkOQo+Y424mZTnoPKImS1E5DjKPzxssfcHk8Fs87W2X0qDy8OsrtuWHEKH1g8ty0BycLsHR6je61g8uz0GyPOw5ZseW0dYtHQeJhy1H2J0daQdR1LAcFwsOinGx5mg83H4tumvZedhwECwPa47bR46vLbvH23AQeFhz9KNmzrFLyeHew5qjdZffLq/TJdw7au63D+t3lrC12+nc9S0fbcvhenn4ie0LCle6Xct9NOeYWnE49xjaH4eFob1GYqfhfFz8Ce0ng48llovDvUdvum3et/7Cvpf4b+wx3I9LiTPt7KKxsMtsiddYJsccZTwQOIA8IDicH4yZeuiG5Z6MA2b7yLY1HE4F1BxzmHpklxCrA8Uju8dYHSjbh4ajceGYQMk1h2fwO2RTjQbhW0uN4FzOYHlMf2gvFtidpFrGPy7T9IkTEVIP1xxPecw0Qm20Hu4/KdR5ZE9q/H8ei5/bROPBg3A/5fMw06D2cM6xwCPbN9OYRelBcOFl7vOaa4R1209BbXLPMX87/bln3C/Ko1PnHPMPx66eGbdJqME2Lj3zKDkoLmOTvp5lEw8lgnGhXe9LJh5q7jlkXCrsQcBRJQ8KjgptHxQcFfIg4aiOBw1HZbYPIo6qeFBxVGRcqDgq4kHGUY1xoeOohAchRxU8KDkq4OH5xTxv3zD1cYbhb6e/Ac3kpFHALqVGAAAAAElFTkSuQmCC",
    
        },
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        category:{
            type:String,
            default:"General"
        },
        tags:{
            type:String,
            enum: ["draft","published"],
            default: "Draft"

        },
        publishedAt:{
            type: Date,
            default:"null"
        },
        views:{
            type: Number,
            default: 0,
            min: 0
        },
        likes:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:'user',
        }],
        comments: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Comment',

        }
        
    },
    {
        timestamps:true

    }
)
module.exports = mongoose.model("Blog",blogSchema)