def get_first_aid_info(wound_type):
    info = {
        "bleeding": {
            "instructions": "Clean the wound with saline. Apply pressure with clean cloth. Use antiseptic.",
            "medicine": ["Betadine", "Cotton", "Bandage"]
        },
        "fracture": {
            "instructions": "Immobilize the limb. Avoid movement. Take to vet immediately.",
            "medicine": ["Pain relief spray", "Splint"]
        },
        "infection": {
            "instructions": "Clean the area. Apply antibiotic ointment. Monitor swelling.",
            "medicine": ["Neosporin", "Cotton"]
        },
        "burn": {
            "instructions": "Cool the area with water. Do not apply ice. Cover with sterile cloth.",
            "medicine": ["Burnol", "Non-stick gauze"]
        },
        "minor_cut": {
            "instructions": "Wash with clean water. Apply antiseptic cream.",
            "medicine": ["Savlon", "Cotton"]
        },
    }
    return info.get(wound_type, {"instructions": "Not found", "medicine": []})
