"use client";
import {
  Container,
  Text,
  Title,
  Group,
  Rating,
  Textarea,
  Button,
  Stack,
  Divider,
  Pagination,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating defaultValue={0} size="lg" />

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        autosize
        minRows={3}
        mt="xs"
      ></Textarea>
      <Button color="orange" size="sm" mt="xs">
        Submit Review
      </Button>
      <Divider my="sm" />

      <Group position="center">
        <Title align="center" order={4}>
          Elon Musk
        </Title>
        <Rating value={5} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        <Title align="center" order={4}>
          Mark Zuck
        </Title>
        <Rating value={4} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>
      <Pagination
        position="center"
        mt="md"
        total={20}
        color="orange"
      ></Pagination>

      <Text align="center" color="dimmed" mt="sm">
        Copyright © 2023 Apinanchai yooyativonf 650612105
      </Text>
    </Container>
  );
}
