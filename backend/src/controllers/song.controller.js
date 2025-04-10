import { Song } from "../models/song.model.js";

export const getAllSongs = async (req, res, next) => {
  try {
    // -1 = descending newest -> oldest
    //1 = ascending oldest -> newest
    const songs = await Song.find().sort({ createAt: -1 });
    res.json(songs);
  } catch (error) {
    console.log("Error in getAllSongs");
    next(error);
  }
};

export const getFeaturedSongs = async (req, res, next) => {
  try {
    //fetch 6 random songs using mongodb aggregation pipeline
    const songs = await Song.aggregate([
      {
        $sample: { size: 6 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          albumId: 1,
          audioUrl: 1,
        },
      },
    ]);
    res.json(songs);
  } catch (error) {
    console.log("Error in fetching featured songs");
    next(error);
  }
};

export const getMadeForYouSongs = async (req, res, next) => {
  try {
    //fetch 4 random songs using mongodb aggregation pipeline
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          albumId: 1,
          audioUrl: 1,
        },
      },
    ]);
    res.json(songs);
  } catch (error) {
    console.log("Error in fetching made for you songs");
    next(error);
  }
};

export const getTrendingSongs = async (req, res, next) => {
  try {
    //fetch 4 random songs using mongodb aggregation pipeline
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          albumId: 1,
          audioUrl: 1,
        },
      },
    ]);
    res.json(songs);
  } catch (error) {
    console.log("Error in fetching trending songs");
    next(error);
  }
};
