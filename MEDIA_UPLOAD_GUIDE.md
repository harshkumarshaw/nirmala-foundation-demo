# Nirmala Foundation - Media Upload Guide

This guide explains how to properly add the authentic campus photography from your Google Drive into the website. I have already wired the website's `media_links.csv` to look for these images in a specific standard layout. 

## Step 1: Create the Local Image Directories
Your website is configured to look for the images inside the `public/images/` folder of your project. Ensure the following sub-folders exist (create them if they do not):

```
public/
  ?? images/
      ?? CCNR/
      ?? German_Visit_IINR_1/
      ?? ICHFN/
      ?? IIHMAHS/
      ?? IINR/
      ?? IIPSR/
      ?? JMN/
      ?? KGH/
```

## Step 2: Download & Extract from Google Drive
Download the corresponding folders from your Google Drive `Selected Images` and place their contents into the local folders created in Step 1. 

**Important details on folder name mappings:**
*   Drive `CCNR` folder ? `public/images/CCNR/`
*   Drive `German Visit IINR_1` folder ? `public/images/German_Visit_IINR_1/`
*   Drive `ICHFN` folder ? `public/images/ICHFN/`
*   Drive `IIHMAHS` folder ? `public/images/IIHMAHS/`
*   Drive `IINR` folder ? `public/images/IINR/`
*   Drive `IIPSR` folder ? `public/images/IIPSR/`
*   Drive `JMN` folder ? `public/images/JMN/`
*   Drive `KGH` folder ? `public/images/KGH/`

## Step 3: Verified File Mappings
I have already updated `media_links.csv` to point to specific highlight photos for your Heroes and Carousels. Make sure you do not rename these specific files when you place them into the `public/images/` folders.

### 🌟 Homepage & Hero Sections
*   **Main Homepage Hero**: `public/images/JMN/_DSC2508.JPG`
*   **Medical Division Panel**: `public/images/JMN/_DSC2922.JPG`
*   **Nursing Division Panel**: `public/images/IINR/_DSC6348.JPG`
*   **Management Division Panel**: `public/images/IIHMAHS/_DSC6313.JPG`
*   **Pharmacy Division Panel**: `public/images/IIPSR/_KMP9301.JPG`
*   **Contact Hero**: `public/images/KGH/_MG_1194.JPG`
*   **Admissions Hero**: `public/images/KGH/_MG_1173.JPG`

### 🏥 Institute specific Pages
*   **IIHMAHS**: `_DSC6313.JPG`, `_DSC6334.JPG`, `AMOF0045.JPG`, `_DSC6340.JPG`
*   **IIPSR**: `_KMP9301.JPG`, `_KMP9325.JPG`, `_KMP9409.JPG`, `_KMP9335.JPG`
*   **ICHFN**: `IMG_0663.JPG`, `IMG_0786.JPG`, `IMG_0799.JPG`
*   **IINR**: `_DSC6348.JPG`, `_KMP9006.JPG`, `_KMP9240.JPG`, `_KMP9127.JPG`
*   **JMN**: `_DSC2508.JPG`, `_DSC2922.JPG`, `_DSC2946.JPG`, `_DSC2935.JPG`
*   **CCNR**: `IMG_0442.JPG`, `IMG_0538.JPG`, `IMG_0562.JPG`
*   **KGH**: `_MG_1173.JPG`, `_MG_1244.JPG`, `_MG_1322.JPG`, `_MG_1275.JPG`

### 🤝 About Page & MoUs
*   **German Visit**: `public/images/German_Visit_IINR_1/German Visit_1.jpeg`

## Step 4: Add New Images (For the Future)
Whenever you get new photos:
1. Put the photo in the appropriate directory inside `public/images/`.
2. Open `media_links.csv` and add or overwrite the specific `Link` cell targeting the new file name (e.g. `/images/JMN/my-new-photo.jpg`).
3. Run `npm run predev` or just restart the server to synchronize the data!
