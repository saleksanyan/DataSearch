# Text Search

# Introduction

Text Search is a project that provides features for finding information about users, cars, and shops according to a database.

# Getting Started

  # Search Algorithm Rules:

  1.The algorithm returns true if there are more than 60% matches between the searchable word(s) and the data.

  2.Providing more inputs results in more accurate results.

  3.The algorithm does not consider IDs, friends/followers, and owners' data in the search.
  
  4.The time complexity of the function is O(m * n * k):
  
    n: number of characters in the text array.
    m: number of strings in the subtext array.
    k: average length of strings in the subtext array.

# Database

The database currently contains three tables: user, car, and shop.

# Usage

  # To use the project:

    Run the project.
    Type the data that interests you into the search bar.
    Click on the preferred user/shop/car to get more information about it.


# How to run the project


    clone the project
    write 
    nodemon app.js
