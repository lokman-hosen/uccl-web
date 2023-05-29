'use client';

//import Image from 'next/image'
import React, { useState, useEffect } from 'react';

import bg from '/public/img/slider-2.png'

 function Project() {
     const allProjects = [
         {
             'id' : 1,
             'name' : 'Widening and Development of National Highways (N- 806) in Norail Town Project',
             'client_name' : 'Rajuk Karmachari KallanTrust',
             'work_detail' : 'N/A',
             'type' : 'current',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : true,
         },
         {
             'id' : 2,
             'name' : 'Construction of 10-Storied Commercial Cum Management Building and 1(One) Basement floor including parking facilities, Internal Sanitary, Water Supply, Gas Connection, Inter Electrification work and other Ancillary works.',
             'client_name' : 'Project Director " Uttara Apartment Project" Rajdhani Unnayan Kartripakkha Rajuk Anex Bhaban (1st floor), Dhaka- 1000.',
             'work_detail' : 'N/A',
             'type' : 'current',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : true,
         },

         {
             'id' : 3,
             'name' : 'Remaining Work for the construction of Regional BSTI Office at Agrabad, Chittagong under the project "Establishment and Modernization for BSTI Regional Offices at Chittagong & Khulna" Sub-head: Civil Works (Super Structure), Internal Water Supply and Sanitation, Internal Electrificartion, Gas Connection, External Water Supply, Compound Drain, Boundary Wall Approach Road, Guard Shed, Culvert etc',
             'client_name' : 'Executive Engineer, Chittagong PWD Division-4,Chittagong',
             'work_detail' : 'N/A',
             'type' : 'current',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : true,
         },
         {
             'id' : 4,
             'name' : 'Construction of 9(Nine) Storied Appartment Buiding with 01(One) Basement at Plot No.22/21,Block- B,Khiljee Road,Mohammad Pur,Dhaka ( Bldg.No.07)',
             'client_name' : 'Project Director "7 Apartment Project" Rajdhani Unnayan Kartipakkha Rajuk Anex Bhaban (3rd Floor) Dhaka- 1000',
             'work_detail' : 'N/A',
             'type' : 'current',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : true,
         },
         {
             'id' : 5,
             'name' : 'Construction of Internal Road & Surface Drain, Cross Drain, RCC walkway road Package No. -RDC-11, Lot No.-3, Sector No.-11 of Purbachal New Town Project',
             'client_name' : 'Project Director Purbachal New Town Project Rajdhani Unnayan Kartripakkha Rajuk Anex Bhaban (6th floor), Dhaka1000.',
             'work_detail' : 'N/A',
             'type' : 'current',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : true,
         },
         {
             'id' : 6,
             'name' : 'Construction of Ansar Barrak including internal sanitary, Electrification and supply of Furnitures of Historical Rose Garden at Tikatuli, Dhaka.',
             'client_name' : 'Executive Engineer, PWD Maintenance Division, Dhaka',
             'work_detail' : 'N/A',
             'type' : 'current',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : true,
         },
         {
             'id' : 7,
             'name' : 'Construction of RCC Retaining wall with gate, DTW and Pumphouse and Road Reconstruction with Internal Electrification.',
             'client_name' : 'Executive Engineer, PWD Maintenance Division, Dhaka',
             'work_detail' : 'N/A',
             'type' : 'current',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 8,
             'name' : 'Construction of RCC Boundary wall with Security fencing, Gate , Ticket Counter including civil, sanitary and Internal Electrification works of Historical Rose Garden at Tikatuli, Dhaka.',
             'client_name' : 'Executive Engineer, PWD Maintenance Division, Dhaka',
             'work_detail' : 'N/A',
             'type' : 'current',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 9,
             'name' : 'Extension work of Porch & Ground Floor Slab, Lobby & 1st Floor Chief Engineer\'s Meeting Room at Purto Bhaban Segunbagicha Dhaka in the year 2022-23',
             'client_name' : 'Executive Engineer, Dhaka PWD Division-4, Dhaka',
             'work_detail' : 'N/A',
             'type' : 'current',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 10,
             'name' : 'Construction of R.C.C walkway, storm water drainage system and internal water distribution line of Historical Rose Garden at Tikatoli, Dhaka.                       ',
             'client_name' : 'Executive Engineer, PWD Maintenance Division, Dhaka',
             'work_detail' : 'N/A',
             'type' : 'current',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },

         {
             'id' : 11,
             'name' : 'Repair, renovation and replacement works of Tiles, Thai aluminium glass, door & chowkat, paint, wall cabinet, work station, Interior paint, roller blinds, wall paper, sanitary fittings, fixture and other ancillary works at 17 & 18th floor, Honorable Minister room, other officers room and general room & corridor, mid lobby floor (East & west Side) & Internal Electrification Work of Ministry of Education at building no-06, Bangladesh Secretariat, Dhaka.',
             'client_name' : 'Executive Engineer, Eden Bhabon PWD Division, Bangladesh Secretariate, Dhaka',
             'work_detail' : 'N/A',
             'type' : 'current',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : true,
         },


         {
             'id' : 12,
             'name' : 'Construction of 2 Nos. 18m width 375m long Cooling Tower Civil works i.e. RCC Foundation, RCC Wall & Column, height of j12.8m from the Ground level.',
             'client_name' : 'Bangladesh China Power Co. (Pvt.) Ltd. UTC Bldg. (level # 5), 8 Panthapath, Kawranbazar, Dhaka- 1215.',
             'work_detail' : 'Construction involves of 2 Nos. 18m width 375m long Cooling Tower Civil works i.e. RCC Foundation, RCC Wall & Column, height of j12.8m from the Ground level. 2020.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 13,
             'name' : 'Construction of 2 Nos. 5.5m diaCircular Geodesic Coal Dome Civil works i.e. RCC Foundation, RCC Wall & Column including supply, erection, fitting, fixing of Steel Dome at a height of 27.5m from the Ground level."',
             'client_name' : 'Bangladesh China Power Co. (Pvt.) Ltd. UTC Bldg. (level # 5), 8 Panthapath, Kawranbazar, Dhaka- 1215.',
             'work_detail' : 'Construction of 2 Nos. 5.5m dia Circular Geodesic Coal Dome Civil works i.e. RCC Foundation, RCC Wall & Column including supply, erection, fitting, fixing of Steel Dome at a height of 27.5m from the Ground level." 2020.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 14,
             'name' : 'Construction of 6Storied Hospital Building with 10(Ten) Storied foundation having one basement in/c. Civil, Internal Sanitary & Water Supply, Internal Electrification, External Water Supply Under Ground water reservoir, Gas Connection and Compound Drain at Sirajganj.',
             'client_name' : 'Executive Engineer Sirajganj PWD Division, Sirajganj.',
             'work_detail' : 'Hospital building with one basement & 10 storied mat foundation RC.C. frame structure building including civil, sanitary, water supply, internal electrical work, underground water reservoir, gas connection, aluminum curtain wall, Gas works. 2022.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 15,
             'name' : 'Construction of 2 Nos. 16-Storied 1250sft. (net) Apartment (Type-A) Building having 16-storied foundation with one Basement and Ground Floors, Internal Sanitary, Water supply, Firefighting, Gas Connection, internal Electrification works & other Ancillary works (Lot No.17).',
             'client_name' : 'Project Director "Uttara Apartment Project" Rajdhani Unnayan Kartripakkha Rajuk Bhaban, Dhaka-1000',
             'work_detail' : 'Construction up to 2nd floor all complete of proposed 6-Storied School building for Banani Bidda Niketon, Banani, Dhaka.2008',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 16,
             'name' : 'Construction of 2 Nos. 16-Storied 1250sft. (net) Apartment (Type-A) Building having 16-storied foundation with one Basement and Ground Floors, Internal Sanitary, Water supply, Fire-fighting, Gas Connection, internal Electrification works & other Ancillary works (Group No-03)',
             'client_name' : 'Project Director “Uttara Apartment Project” Rajdhani Unnayan Kartripakkha Rajuk Bhaban, Dhaka- 1000',
             'work_detail' : 'Residential building with one basement & 16 storied mat foundation RC.C. frame structure building including civil, sanitary, internal eletrical work, fire fitting, aluminum curtain wall, Gas works. 2018.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 17,
             'name' : 'Rehabilitation & Resettlement work under “Land Acquisition, Land Development & Protection for Payra 1320 MW Thermal Power Plant Project.',
             'client_name' : 'Project Director (Chief Engineer) Land Acquisition, Land Development & Protection for Payra 1320 MW Thermal Power Plant Project. North-West Power Generation Company Ltd. (NWPGCL) UTC Building, Level-3, 8 Panthopath, Kawran Bazar, Dhaka-1215.',
             'work_detail' : 'Topographical Survey, Master Plan Preparation and Architectural & Structural drawing, General Site Facilities & Land Development (190500cum), Building Type-A Building Type-B Internal Road, Drain, Pond, Hand Tube well, Boundary Wall, School, Community Center & Clinic, Market, Mosque, Main Gate, Landscaping etc. 2017.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 18,
             'name' : 'Construction of 15- Storied Commercial Bldg. with double basement at Com.Plot no. 4, 6, 31 & 33 of Nikunza for R.K.K.T.',
             'client_name' : 'Rajuk Karmachari KallanTrust',
             'work_detail' : 'Commercial Building with double basement & 16- Storied foundation R.C.C frame structure building including Civil, Sanitary, internal / external electrical work, Substation lift, escalator works .2006',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 19,
             'name' : 'Construction of 15- Storied Apartment Building for Rehabilitation of Affected People at Integrated Development of Hatirjheel Area in/c. Begun Bari Khal Project Pkg.-1 (1250 sft. per unit) 56 nos. of flat (one basement)',
             'client_name' : 'Project Director, Hatirjheel Project, RAJUK, Dhaka.',
             'work_detail' : 'Construction of 15- Storied Apartment Building for Rehabilitation of Affected People at Integrated Development of Hatirjheel Area in/c. Begun Bari Khal Project Pkg.-1 (1250 sft. per unit) 56 nos. of flat (one basement) 2015.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 20,
             'name' : 'Construction of Internal 60’-0” wide road including foot path & pipe drain at block-A of Uttara Apartment Project',
             'client_name' : 'Project Director "Uttara Apartment Project" Rajdhani Unnayan Kartripakkha Rajuk Bhaban, Dhaka- 1000',
             'work_detail' : 'Construction of Internal 60’-0” wide road including foot path & pipe drain at block-A of Uttara Apartment Project 2018.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 21,
             'name' : 'Construction of  Multi-Storied Car Parking-Cum Office Building at Gulshan Circle-1, Dhaka (with double basement)',
             'client_name' : 'Executive Engineer, Rajuk Central Division, Rajuk, Dhaka.',
             'work_detail' : 'Construction Involve Cast-in-Situ Shore Pile Work, Mat Foundation, 2 Basement with 16-Storied Commercial Building in/c. all Sanitary Work, Internal Electrification Work, Fire Protection Work 2012.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 22,
             'name' : 'Repair & Up-grade the road from junction point of Avenue -01 & 02 Round about passing Avenue -01, 03 & 04 (Partial ) Baribundh at Uttara RMT 3rd Phase Project.',
             'client_name' : 'Project Director " Uttara Residential Model Town (3rd Phase) Project" RajdhaniUnnayanKartr ipakkhaRajukAnex Bhaban (5th floor), Dhaka-1000.',
             'work_detail' : 'Repair & Up-grade the road from junction point of Avenue -01 & 02 Round about passing Avenue -01, 03 & 04 (Partial ) Baribundh at Uttara RMT 3rd Phase Project. 2019.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 23,
             'name' : 'Construction of 12- Storied Commercial Building with 2 Basement Floor (Atlanta Trade Center) at Plot-1, Road-1/A, Sec-4, Uttara, Dhaka.',
             'client_name' : 'Md. AnisurRahman Owner Plot-1, Road-1/A, Sec- 4, Uttara, Dhaka.',
             'work_detail' : 'Construction of 12- Storied Commercial Building with 2 Basement Floor (Atlanta Trade Center) 2014.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 24,
             'name' : '(Nine) Storied Apartment Building with 01(One) Basement at Plot No.22/21, Block-B, Khiljee Road, Mohammadpur, Dhaka. (Bldg.No.07)',
             'client_name' : 'Construction of 9 Project Director " 7 Apartment Project" RajdhaniUnnayanKart ripakkhaRajukAnex Bhaban (3rd floor), Dhaka-1000.',
             'work_detail' : 'Construction of 9 (Nine) Storied Apartment Building with 01(One) Basement (mat foundation, sub structure, superstructure, civil, sanitary & elec. works etc. 2022.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 25,
             'name' : 'Construction of NAM VILLAGE at Banani, Group-II',
             'client_name' : 'Rajdhani Unnayan Kartipakkha.',
             'work_detail' : 'Construction involves up to 6-Storied Cast-in- Situ Pile foundation R.C.C. frame Structure Apartment Building including drawing, design, Civil, Sanitary & Electrification works.(TRUN-KEY PROJECT)2005',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 26,
             'name' : 'Construction of 10- Storied Commercial Bldg. with 01 (One) basement floor with17-Storied foundation of Madona group in Rajuk Commercial plot no.28, Mohakhali C/A, Dhaka–1212.',
             'client_name' : 'Madona garments ltd.',
             'work_detail' : 'Construction of 10 Storied Commercial Bldg. with 01 (One) basement floor with 17-Storied foundation of Madona group. 2005',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 27,
             'name' : 'Refurbishment of factory building no. 01 at Adamjee EPZ (Contract Package W # 17), Adamjee Nagar, Narayangonj.',
             'client_name' : 'Md. Shah Alam Sarkar Chief Engr. Tel:8650069 Bangladesh Export Processing Zone Authority. House # 19/D, Road # 06, Dhanmondi, Dhaka-1205.',
             'work_detail' : 'Construction involves 4 storied RC.C. frame structure factory building with internal & external electrification & sanitary works.2009',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 28,
             'name' : 'Consultancy service for sirajgonj225MW Combined Cycle Power Plant Project (2nd Unit) under North West Power Generation Co. Ltd. (NWPGCL)',
             'client_name' : 'China National Machinery Import & Export Corporation (CMC), Bangladesh Branch. House no. NE(A) 9/C, Road no.71, Gulsahn- 2, Dhaka.',
             'work_detail' : 'Consultancy service for sirajgonj225MW Combined Cycle Power Plant Project (2nd Unit) under North West Power Generation Co. Ltd. (NWPGCL) 2016.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 29,
             'name' : 'Refurbishment of factory building no. 01 at Adamjee EPZ (Contract Package W#16), Adamjee Nagar, Narayangonj.',
             'client_name' : 'Chief Engr. Bangladesh Export Processing Zone Authority.',
             'work_detail' : 'Refurbishment of factory building no. 01 at Adamjee EPZ (Contract Package W#16), Adamjee Nagar, Narayangonj. 2010.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 30,
             'name' : 'Supplying, fabrication & installation of MS rod, pipe, support and bracings for the form works, ply board as form work, accessories etc. for sirajgonj 225MW Combined Cycle Power Plant Project (3rd unit) at sirajgonj, Bangladesh.',
             'client_name' : 'China National Machinery Import & Export Corporation (CMC), Bangladesh Branch. House no. NE(A) 9/C, Road no.71, Gulsahn- 2, Dhaka.',
             'work_detail' : 'Supplying, fabrication & installation of MS rod, pipe, support and bracings for the form works, ply board as form work, accessories etc. for sirajgonj 225MW Combined Cycle Power Plant Project (3rd unit) at sirajgonj, Bangladesh. 2016.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 31,
             'name' : 'Construction of 10- Storied residential building at Dinajpur housing state under National Housing Authority, Dinajpur Division, Dinajpur.',
             'client_name' : 'Executive Engineer National Housing Authority, Dinajpur Division, Dinajpur.',
             'work_detail' : 'Construction of 10- Storied residential building at Dinajpur housing state 2018.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 32,
             'name' : 'Construction of Multi storied Commercial Bldg. of M/S. Hossain’s ltd. in Rajuk Commercial plot no. 113, Sec. no. 7, Dhaka Mymensingh road, Uttara C/A.,Dhaka- 1230.',
             'client_name' : 'M/S. Hossain’s ltd. Managing Director- Md. Delwar Hossain',
             'work_detail' : 'Construction involves 16 Storied Bldg. foundation (Raft foundation) a basement floor & complete up to 10 Storied Bldg. with sanitary & water supply, lift installation & electrical works.2005.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 33,
             'name' : 'Construction of 14- Storied Rajuk Officers Quarter with a Basement floor at Malibagh (Remaining Work) Dhaka.',
             'client_name' : 'Executive Engineer Central Dhaka (Rajuk)Division RajdhaniUnnayanKart ripakkhaRajukAnex Bhaban (3rd floor), Dhaka-1000.',
             'work_detail' : 'Construction of 14- Storied Rajuk Officers Quarter with a Basement floor at Malibagh (Remaining Work) Dhaka. 2019.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 34,
             'name' : 'Remaining work of 15-Storied Apartment Building for Rehabilitation of Affected People at Integrated Development of Hatirjheel Area in/c. Begun Bari Khal Project. (Bhaban No.2)',
             'client_name' : 'Project Director Integrated Development of Hatirjheel Area in/c. Begun Bari Khal ProjectRajdhaniUnnay anKartripakkhaRajukB haban, Dhaka-1000',
             'work_detail' : 'Residential building with one basement & 16 storied Apartment Building finishing work (Brick work, wood work, sanitary work, thai aluminum & other related finishing works. 2018.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 35,
             'name' : 'Construction of Single Storied Car Parking Building with Single Basement Floor & Front Side of Boundary Wall including other Necessary work of 15- Storied Apartment Building for Selling and Rehabilitation of Affected People at Integrated Development of Hatirjheel Area.',
             'client_name' : 'Project Director Integrated Development of Hatirjheel Area in/c. Begun Bari Khal Project Rajdhani Unnayan Kartripakkha Rajuk Bhaban, Dhaka- 1000',
             'work_detail' : 'Construction of Single Storied Car Parking Building with Single Basement Floor & Front Side of Boundary Wall including other Necessary work of 15 Storied Apartment Building for Selling and Rehabilitation of Affected People at Integrated Development of Hatirjheel Area. 2018.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 36,
             'name' : 'Supplying of 1 set Bypass Silencer (14 Pcs.) and Auxiliary Facilities of Stack for Sirajganj 150 MW to 225MW Combined Cycle Power Plant Project under North West Power Generation Co. Ltd. (NWPGCI)',
             'client_name' : 'Mr. Qi Yue CMC Sirajganj Project Office Chaina National Machinery Import & Export Corporation (CMC)',
             'work_detail' : 'Supplying of 1 set Bypass Silencer (14 Pcs.) and Auxiliary Facilities of Stack for Sirajganj 150 MW to 225MW Combined Cycle Power Plant Project under North West Power Generation Co. Ltd. (NWPGCI) 2014.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 37,
             'name' : 'Construction of 4th floor to 8th floor on existing commercial complex of Rajuk Karmachari Bahumukhi Samabay Shamiti at Uttara. (Civil, Sanitary, Water supply & Electrical)',
             'client_name' : 'Rajuk Karmachari Bahumukhi Samabay Shamiti Ltd.',
             'work_detail' : 'Construction of 4th floor to 8th floor on existing commercial complex of Rajuk Karmachari Bahumukhi Samabay Shamiti at Uttara. (Civil, Sanitary, Water supply & Electrical). 2008',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 37,
             'name' : 'Supplying of 3 set Fine Filter& 1 set Pre-Filter for Sirajganj 150 MW Power Plant Project under North West Power Generation Co. Ltd.',
             'client_name' : 'Mr. Qi Yue CMC Sirajganj Project Office Chaina National Machinery Import & Export Corporation (CMC).',
             'work_detail' : 'Supplying of 3 set Fine Filter& 1 set Pre-Filter for Sirajganj 150 MW Power Plant Project under North West Power Generation Co. Ltd. 2014',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 38,
             'name' : 'Remodeling & Re- construction of Shaistagonj Railway Station Building in/c. repairs, renovation, extension, construction of platform, plat form shed, approach road, parking area, foot over bridge & renovation of water supply with other related ancillary work.',
             'client_name' : 'Bangladesh Railway /East, Chief Engineer /East, Chittagonj',
             'work_detail' : 'Construction involves New Station Building, repairing existing plat form shed, extension of platform & platform shed, car parking, approach road, repair of foot over bridge & renovation of water supply arrangement. 2007',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 39,
             'name' : 'Construction of Internal Road of Sector-J Block at Uttara Residential Model Town (3rd Phase) Project Area. (Group N0-29)',
             'client_name' : 'Project Director " Uttara Residential Model Town (3rd Phase) Project" RajdhaniUnnayanKartr ipakkhaRajukAnex Bhaban (5th floor), Dhaka-1000.',
             'work_detail' : 'Construction of Internal Road of Sector-J Block at Uttara Residential Model Town (3rd Phase) Project Area. (Group N0-29) 2014.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 40,
             'name' : 'Supply of 01 (one) set Pre-Filter for Sirajganj 225MW Combined Cycle Power Plant Project (2nd Unit-Dual Fual) under North West Power Generation Co. Ltd. (NWPGCL)',
             'client_name' : 'China National Machinery Import & Export Corporation (CMC), Bangladesh Branch. House no. NE(A) 9/C, Road no.71, Gulsahn- 2, Dhaka.',
             'work_detail' : 'Supply of 01 (one) set Pre-Filter for Sirajganj 225MW Combined Cycle Power Plant Project (2nd Unit-Dual Fual) under North West Power Generation Co. Ltd. (NWPGCL) 2017.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 41,
             'name' : 'Construction of 3- Storied Factory Building (Bldg.no.1) at E.P.Z- Comilla.',
             'client_name' : 'Bangladesh Exp-ort Processing Zone. Md. Shah Alom Sarker. XEN. Tel:08177055',
             'work_detail' : 'R.C.C frame Structure 3 -Storied Building with pile foundation including Civil, Sanitary and Electrificationwork.2003',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 42,
             'name' : 'Supplying of 1 set 230KV Power Distribution Unit for Sirajganj 150 MW Power Plant Project and 1 set for Sirajganj 150MW to 225MW Combined Cycle Power Plant under North West Power Generation Co. Ltd. (NWPGCI)',
             'client_name' : 'Mr. Qi Yue CMC Sirajganj Project Office Chaina National Machinery Import & Export Corporation (CMC).',
             'work_detail' : 'Supplying of 1 set 230KV Power Distribution Unit for Sirajganj 150 MW Power Plant Project and 1 set for Sirajganj 150MW to 225MW Combined Cycle Power Plant under North West Power Generation Co. Ltd. (NWPGCI) 2014.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 43,
             'name' : 'Supplying of 1 set 230KV Power Distribution Unit for Sirajganj 150 MW Power Plant Project and 1 set for Sirajganj 150MW to 225MW Combined Cycle Power Plant under North West Power Generation Co. Ltd. (NWPGCI)',
             'client_name' : 'Mr. Qi Yue CMC Sirajganj Project Office Chaina National Machinery Import & Export Corporation (CMC).',
             'work_detail' : 'Supplying of 1 set 230KV Power Distribution Unit for Sirajganj 150 MW Power Plant Project and 1 set for Sirajganj 150MW to 225MW Combined Cycle Power Plant under North West Power Generation Co. Ltd. (NWPGCI) 2014.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 44,
             'name' : 'Construction of 7th &8th floor of BKB Head Office Building at, Motijheel,Dhaka.',
             'client_name' : 'Bangladesh Krishi Bank. Nitai Chandra Roy. ChiefEngr.',
             'work_detail' : 'Construction involves up to 7th& 8th floor, R.C.C frame Structure Building including Civil, Sanitary, Electrical& lift up-gradationwork.2003',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 45,
             'name' : 'Construction of 3000 M.T capacity seed godown with drying chamber & grading room at Rangpur under BADC.',
             'client_name' : 'BADC Krishi Bhaban 49-51, Dilkusha, C/A.Dhaka. Chief Engineer(Cons truction)',
             'work_detail' : 'Construction involves up to 7th& 8th floor, R.C.C frame Structure Building including Civil, Sanitary, Electrical& lift up-gradationwork.2003',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 46,
             'name' : 'Construction of 3000 M.T capacity seed godown with drying chamber & grading room at Rangpur under BADC.',
             'client_name' : 'BADC Krishi Bhaban 49-51, Dilkusha, C/A.Dhaka. Chief Engineer(Cons truction)',
             'work_detail' : 'Construction of 3000 M. T capacity seed go down with drying chamber & grading room at Rangpur under BADC.2009',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 47,
             'name' : 'Construction of Central Radio Active Waste Processing and Storage Facility (CWPSF) at A.E.R.E Savar, Dhaka.',
             'client_name' : 'Bangladesh Atomic Energy Commission. Md. Muzammel Hoque. Chief Eng. Tel:8626744',
             'work_detail' : 'Construction involves 80\'-0" height Stack R.C.C frame Structure Building with R.C.C. heavy width wall for Anti raditional casting with heavy mineral sand and finished with Epoxy paint Sanitary &Water supply and Electrical works.2002',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 48,
             'name' : 'Construction of Central Mosque (part) at Islamic University, Kushtia.',
             'client_name' : 'Islamic University Kushtia. Chief Engineer Md. Maqbul Hossain.',
             'work_detail' : 'Construction involves up to 4-Storied R.C.C frame Structure Building with 52\'-0" dia & 110\'-0" height Central dome.1999.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },

         {
             'id' : 49,
             'name' : 'Construction of 100\'- 0" wide Road (avenue-8) at Uttara Residential Model Town (3rd Phase) Project Area. (Group N0-15)',
             'client_name' : 'Project Director Uttara RMT (3rd Phase) Project, RAJUK',
             'work_detail' : 'Construction of 100\'-0" wide Road (avenue-8) at Uttara Residential Model Town (3rd Phase) Project Area. (Group N0-15) 2015.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },

         {
             'id' : 50,
             'name' : 'Remodeling and Re construction of Brahman Baria Railway Station. Brahman Baria.',
             'client_name' : 'Chief Engineer, East Bangladesh Railway',
             'work_detail' : 'Reconstruction of Station Building, Extension of platform shed, sanitary work, electrical work and other related ancillary works.2004',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 51,
             'name' : 'Construction of 1 No. 1000 MT Food Godown at existing LSDs (Bhulirhat) & 2 Nos 500 MT Food Godown at existing LSDs (Shibgonj, Goreyahat) with ancillary facilities like electrical works (Internal & external) site development Internal R.C.C Road etc. complete under Thakurgaon District (Lot No-25)',
             'client_name' : 'Executive Engineer PWD Thakurgaon Division Thakurgaon.',
             'work_detail' : 'Construction of 1 No. 1000 MT Food Godown at existing LSDs (Bhulirhat) & 2 Nos 500 MT Food Godown at existing LSDs (Shibgonj, Goreyahat) with ancillary facilities like electrical works (Internal & external) site development Internal R.C.C Road etc. complete under Thakurgaon District (Lot No-25) 2011.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 52,
             'name' : 'Construction of 9th &10th floor of B.S.E.C Bhaban at Kawran Bazar.',
             'client_name' : 'Bangladesh Steel Engineering Corporation. Mahfuzur Rahman. Chief Engineer',
             'work_detail' : 'Construction involves vertical extension of 2 additional-Storied R.C.C frame Structure Building with sanitary & electrification works. 2003',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 53,
             'name' : 'Consultancy service for Payra 1320MW Coal Fired Power Plant of Bangladesh China Power Company (Pvt.) Limited.',
             'client_name' : 'Hugh Redulet Oriental Prime International Limited (OPIL). Toad Town, Tortolo, P.O. Box 957, Offshore Incorporation Centre. British Vergin Islands',
             'work_detail' : 'Consultancy service for Payra 1320MW Coal Fired Power Plant of Bangladesh China Power Company (Pvt.) Limited 2016.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 54,
             'name' : 'Supplying of 1 set Fine Filter& 1 set Pre-Filter for Sirajganj 150 MW Power Plant Project under North West Power Generation Co. Ltd.',
             'client_name' : 'Mr. Qi Yue CMC Sirajganj Project Office Chaina National Machinery Import & Export Corporation (CMC).\n',
             'work_detail' : 'Supplying of 1 set Fine Filter& 1 set Pre-Filter for Sirajganj 150 MW Power Plant Project under North West Power Generation Co. Ltd. 2014.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 55,
             'name' : 'Maintenance work at Khulna 150MW Peaking Power Plant, Bangladesh.',
             'client_name' : 'ISOLUX INGENIERIA S.A Bangladesh, House- 63, Road-4, Block-C, Banani, Dhaka.',
             'work_detail' : 'Maintenance work at Khulna 150MW Peaking Power Plant, Bangladesh. 2015.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 56,
             'name' : 'Maintenance work at Khulna 150MW Peaking Power Plant, Bangladesh.',
             'client_name' : 'ISOLUX INGENIERIA S.A Bangladesh, House- 63, Road-4, Block-C, Banani, Dhaka.',
             'work_detail' : 'Maintenance work at Khulna 150MW Peaking Power Plant, Bangladesh. 2014.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 57,
             'name' : 'Construction of 6- Storied administrative cum academic building in/c. Sanitary, Water supply & Internal electrification works at Chapai Nawabgonj Polytechnic Institute.',
             'client_name' : 'Education Engineering Department Rajshahi Zone, Rajshahi. Executive Engineer Rajshahi Zone.',
             'work_detail' : 'Construction of 6-Storied administrative cum academic building in/c. Sanitary, Water supply & Internal electrification works at Chapai Nawabgonj Polytechnic Institute.2009',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 58,
             'name' : 'Construction up to2nd floor all complete of proposed 6-Storied School building for Banani Bidda Niketon, Banani, Dhaka.',
             'client_name' : 'Banani Bidda Niketon Banani, Dhaka. Headmaster',
             'work_detail' : 'Construction up to 2nd floor all complete of proposed 6-Storied School building for Banani Bidda Niketon, Banani, Dhaka.2008',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 59,
             'name' : 'Construction of Officer\'s Hostel Building at A.E.R.E Savar.',
             'client_name' : 'Bangladesh Atomic Energy Commission. Md. Monirul Islam Principal Engr.',
             'work_detail' : 'Construction of involves 5-Storied foundation completed 2-Storied Building with Sanitary & water supply and Electrical works.2000.',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 60,
             'name' : 'Construction of 6- Storied functional Building of RPGCL at plot no. 27, Zoar Shahara, Dhaka.',
             'client_name' : 'Rupantarita Prakritik Gas Company Limited K.M.S. Elias Hossain DGM Tel:9128353 9014643',
             'work_detail' : 'Construction involves upto 6- Storied R.C.C frame Structure Building with Sanitary, Water supply, Electrical work including design, drawing etc. complete. 2004',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },
         {
             'id' : 61,
             'name' : 'Construction of Sub- station Building & Providing Installation, Testing and Commissioning of 315KVA Indoor type Sub-station Equipments, 60 KVA Diesel Generator set with H.T & L.T Overhead Electrical line in/c. REB & License board charges & related Accessories at Chapai Nawabgonj Ploy Technic Institute.',
             'client_name' : 'Education Engineering Department Rajshahi Zone, Rajshahi. Executive Engineer Rajshahi Zone.',
             'work_detail' : 'Construction of Substation Building & Providing Installation, Testing and Commissioning of 315KVA Indoor type Substation Equipments, 60KVA Diesel Generator set with H.T & L.T Overhead Electrical line in/c. REB & License board charges & related Accessories at Chapai Nawabgonj Ploy Technic Institute.2009',
             'type' : 'completed',
             'imgPath' : 'img/projects/default.png',
             'remarkable' : false,
         },


     ]

     const [projects, setProjects] = useState([]);

     // Similar to componentDidMount and componentDidUpdate:
     useEffect(() => {
         // Update the document title using the browser API
        getCurrentProject()

     });

     function getCurrentProject(){
         //setProjects(allProjects)
         const currentProjects = allProjects.filter((project) => {
              return project.type == 'completed';
          });
          console.log(currentProjects)
          setProjects(currentProjects);
     }
    
    return (
        <div>
            <section className="home-slider inner-page owl-carousel">
                <div className="slider-item"  style={{backgroundImage: `url(${bg.src})`}}>
                    <div className="container">
                        <div className="row slider-text align-items-center justify-content-center text-center">
                            <div className="col-md-7 col-sm-12 element-animate">
                                <h1>Completed and Ongoing Major Projects</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="completed-project-tab" data-toggle="tab"
                                            data-target="#completed-project" type="button" role="tab"
                                            aria-controls="completed-project" aria-selected="true"><h4>Completed
                                        Projects</h4>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="current-project-tab" data-toggle="tab"
                                            data-target="#current-project" type="button" role="tab"
                                            aria-controls="current-project"
                                            aria-selected="false"><h4>Current Projects</h4>
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="completed-project" role="tabpanel"
                                     aria-labelledby="completed-project-tab">
                                    <div className="row" id="completedProject">
                                        { projects.length > 0 && projects.map((project)=>
                                            <div key={project.id} className="col-lg-4 col-md-6 element-animate fadeInUp element-animated">
                                                <div className="media d-block media-custom text-left">
                                                    <img src="img/projects/default.png" alt="Image Placeholder" className="img-fluid"
                                                         style={{height: 280}}/>
                                                    <div className="media-body">
                                                        <h3 className="mt-0 text-black"></h3><h5 className="mb-1">Project Name:</h5>
                                                        <a href="#" className="text-black">{project.name}</a>

                                                        <h6 className="mb-1 mt-3 bold-text">Client/Employer:</h6>
                                                        <p>Bangladesh China Power Co. (Pvt.) Ltd. U...</p>
                                                        <p><b className="bold-text">Description: </b>Construction involves of 2 Nos. 18m width 375m
                                                            long Cooling Tower Civil works i.e. RCC Foundation, RCC Wall &amp; Column, he...</p>
                                                        <p className="clearfix">
                                                            <a href="project-detail.html?id=12" className="float-left">Read more</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project;
