const Profile = require("../models/Profile");

async function UpdateProfile(req, res) {
   try {
    const { userId, updatedProfile } = req.body;

    // Update the user's profile
    const updatedUserProfile = await Profile.findOneAndUpdate(
      { userId: userId },
      { $set: updatedProfile },
      { new: true }
    );

    if (!updatedUserProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.json({
      message: "Profile updated successfully",
      profile: updatedUserProfile,
    });
  } catch (error) {
    res.status(500).json({ error: "Oops! Some error occured." });
  }
}

module.exports = UpdateProfile;
