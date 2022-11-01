**1.What columns violate 1NF?**
-food_code and food_description columns contain multiple values
-dinner_date violates 1NF because date formats are different

**2.What entities do you recognize that could be extracted??**
Member, Dinner, Venue, and Food entities could be extracted.

**3.Name all the tables and columns that would make a 3NF compliant solution.**

*Member*

|member_id  |member_name   |member_address  |
|:---       | :---:        |    ---:        |

*Dinner*

|dinner_id  |dinner_date |
|:---       |        ---:|

*Venues*

|venue_code | venue_description |
|:---       |               ---:|

*Food*

|food_code | food_description|
|:---       |            ---:|

*member_dinner*

|id     |member_id | dinner_id|
|:---   |   :---:  |     ---: |

*member_venue*

|id     |member_id | venue_code|
|:---   |   :---:  |     ---:  |

*member_food*

|id     |member_id | food_code|
|:---   |   :---:  |     ---: |
