import { Test, TestingModule } from '@nestjs/testing';
import { ClimateThirdPartyServiceController } from './climate-third-party-service.controller';
import { ClimateThirdPartyServiceService } from './climate-third-party-service.service';

describe('ClimateThirdPartyServiceController', () => {
  let controller: ClimateThirdPartyServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClimateThirdPartyServiceController],
      providers: [ClimateThirdPartyServiceService],
    }).compile();

    controller = module.get<ClimateThirdPartyServiceController>(ClimateThirdPartyServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
