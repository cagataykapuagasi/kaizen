import React from 'react';
import { StyleSheet } from 'react-native';

import { Button, Container, Icon, View } from 'src/components';
import Image from 'src/components/Image';
import images from 'res/images';
import { PromotionModule } from 'src/modules';
import { languages } from 'res/index';

const { login } = languages.get('default');

function Home() {
  return (
    <Container backgroundColor="primary" containerStyle={styles.container}>
      <View gap={12} spaceBetween paddingHorizontal={15}>
        <Image height={40} width={81} source={images.home_logo} />

        <View row gap={10} style={{ flexShrink: 1 }}>
          <Button>{login}</Button>

          <Icon backgroundColor="dark" size={16} name="profile" container height={40} width={40} />
        </View>
      </View>

      <PromotionModule />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default Home;
