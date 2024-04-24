import { Box, Heading, Text, VStack, HStack, Button, Image } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

// ScenePhotographyComponent
const ScenePhotographyComponent = ({ direction_photography, image_generation_result, scene }) => {
  return (
    <VStack align="start" p={4} border="1px" borderColor="gray.200" borderRadius="md">
      <Heading size="md">Photography Direction</Heading>
      <Text>{direction_photography}</Text>
      <Image src={image_generation_result} alt="Scene Storyboard" />
      <Text>
        <strong>Scene:</strong> {scene}
      </Text>
    </VStack>
  );
};

// SceneDetailsComponent
const SceneDetailsComponent = ({ name, description, duration, timeslot }) => {
  return (
    <VStack align="start" p={4} border="1px" borderColor="gray.200" borderRadius="md">
      <Heading size="md">{name}</Heading>
      <Text>
        <strong>Description:</strong> {description}
      </Text>
      <Text>
        <strong>Duration:</strong> {duration}
      </Text>
      <Text>
        <strong>Timeslot:</strong> {timeslot}
      </Text>
    </VStack>
  );
};

// Index Component
const Index = () => {
  const project = {
    name: "Epic Film Project",
    song: "Heroic Symphony",
    video_idea: "A journey of a hero in a dystopian world",
    scenes: [
      {
        name: "Opening Scene",
        description: "Introduction to the hero's world",
        duration: "3 minutes",
        timeslot: "00:00 - 03:00",
        direction_photography: "Wide shots of the desolate landscape",
        image_generation_result: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNvbGF0ZSUyMGxhbmRzY2FwZSUyMHdpZGUlMjBzaG90fGVufDB8fHx8MTcxMzkyNjI2M3ww&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        name: "Climax Scene",
        description: "Hero confronts the antagonist",
        duration: "5 minutes",
        timeslot: "45:00 - 50:00",
        direction_photography: "Close-up shots with intense lighting",
        image_generation_result: "https://images.unsplash.com/photo-1712530391121-ccafb3f3cdab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnRlbnNlJTIwY2xvc2UtdXAlMjBzaG90fGVufDB8fHx8MTcxMzkyNjI2M3ww&ixlib=rb-4.0.3&q=80&w=1080",
      },
    ],
    style: {
      art_direction: "Futuristic yet decayed settings",
      art_style: "Realistic with CGI enhancements",
      general_mood: "Gritty and suspenseful",
      motifs: "Rebellion, Hope, Survival",
    },
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Heading>{project.name}</Heading>
        <Text>
          <strong>Song:</strong> {project.song}
        </Text>
        <Text>
          <strong>Video Idea:</strong> {project.video_idea}
        </Text>

        <Heading size="lg" mt={10}>
          Scenes
        </Heading>
        {project.scenes.map((scene, index) => (
          <HStack key={index} w="full" spacing={4}>
            <SceneDetailsComponent {...scene} />
            <ScenePhotographyComponent {...scene} scene={scene.description} />
            <VStack>
              <Button leftIcon={<FaEdit />} colorScheme="blue">
                Edit
              </Button>
              <Button leftIcon={<FaTrash />} colorScheme="red">
                Delete
              </Button>
            </VStack>
          </HStack>
        ))}

        <Button leftIcon={<FaPlus />} colorScheme="green" mt={5}>
          Add New Scene
        </Button>

        <Heading size="lg" mt={10}>
          Style Information
        </Heading>
        <Text>
          <strong>Art Direction:</strong> {project.style.art_direction}
        </Text>
        <Text>
          <strong>Art Style:</strong> {project.style.art_style}
        </Text>
        <Text>
          <strong>General Mood:</strong> {project.style.general_mood}
        </Text>
        <Text>
          <strong>Motifs:</strong> {project.style.motifs}
        </Text>
      </VStack>
    </Box>
  );
};

export default Index;
